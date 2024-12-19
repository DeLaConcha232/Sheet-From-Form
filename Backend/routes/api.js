const express = require('express');
const Product = require('../models/Model');
const router = express.Router();

// Ruta para obtener información basada en la categoría seleccionada
router.get('/products', async (req, res) => {
   const { category } = req.query;

   try {
      const products = await Product.find({ category });
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos', error });
   }
});

module.exports = router;
