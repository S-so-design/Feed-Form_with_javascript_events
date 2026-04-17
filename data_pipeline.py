from pyspark.sql import SparkSession
from pyspark.sql.functions import col, lower, split, explode

# Start Spark session
spark = SparkSession.builder \
    .appName("Feedback Data Pipeline") \
    .getOrCreate()

# Load JSON data
df = spark.read.json("feedback.json")

print("=== RAW DATA ===")
df.show()

# Clean data
clean_df = df.select(
    col("name"),
    col("feedback"),
    col("rating").cast("int")
)

# Rating count
print("=== RATING DISTRIBUTION ===")
rating_count = clean_df.groupBy("rating").count()
rating_count.show()

# Word analysis (simple NLP)
words_df = clean_df.select(
    explode(split(lower(col("feedback")), " ")).alias("word")
)

word_count = words_df.groupBy("word").count().orderBy(col("count").desc())

print("=== TOP WORDS ===")
word_count.show(10)

# Save output
rating_count.write.mode("overwrite").json("output/ratings")
word_count.write.mode("overwrite").json("output/words")

print("Pipeline completed successfully!")

spark.stop()