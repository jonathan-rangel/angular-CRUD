module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      image: String,
      storage: Number,
      color: String,
      quantity: Number,
      stock: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Smartphone = mongoose.model("smartphone", schema);
  return Smartphone;
};
