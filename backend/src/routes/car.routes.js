const express = require("express");
const router = express.Router();
const prisma = require("../prismaClient");
const { verifyToken, verifyAdmin } = require("../middleware/auth");

// ✅ Add new car (Admin only)
router.post("/", verifyToken, verifyAdmin, async (req, res) => {
  const { name, brand, model, type, seats, pricePerDay, location, imageUrl } = req.body;

  try {
    const car = await prisma.car.create({
      data: {
        name,
        brand,
        model,
        type,
        seats: parseInt(seats),
        pricePerDay: parseFloat(pricePerDay),
        location,
        imageUrl,
        ownerId: req.user.id, // 👈 links car to admin
      },
    });
    res.json({ message: "Car added successfully", car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding car" });
  }
});

// ✅ Fetch all available cars (User view)
router.get("/", async (req, res) => {
  try {
    const cars = await prisma.car.findMany({
      where: { availability: true },
      include: { owner: true },
    });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars" });
  }
});

// ✅ Fetch cars owned by current admin
router.get("/my", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const cars = await prisma.car.findMany({
      where: { ownerId: req.user.id },
    });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin cars" });
  }
});

// ✅ Delete car
router.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.car.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car" });
  }
});

module.exports = router;
