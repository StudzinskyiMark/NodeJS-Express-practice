import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {});

// User Login
router.post('/login', async (req, res) => {});

export default router;
