import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "O titulo do livro é obrigatorio"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O autor [e obrigatorio"]},
    editora: {type: String, required: [true, "A editora é obrigatorio"]},
    numeroPaginas: {type: Number}
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;