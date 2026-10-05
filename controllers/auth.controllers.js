import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async function (req, res, next) {

    const session = await mongoose.startSession();
    session.startTransaction();


    try {

        const { username, email, password } = req.body;
        // Logic to create a new user and save it to the database
        const existingUser = await User.findOne({ email }).session(session);

        if (existingUser) {
            const error = new Error("User already exists");
            error.status = 409
            throw error;
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create([{ username, email, password: hashedPassword }], { session });
        const token = jwt.sign({userId: newUser._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})       

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({success: true, message: 'User created successfully', data: {user: newUser[0], token}});
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }


    // implement sign up logic here

}


export const signIn = async function (req, res, next) {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = new Error("Invalid password");
            error.status = 401;
            throw error;
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.status(200).json({ success: true, message: "Sign in successful", data: { user, token } });

    } catch (error) {
        next(error);
    }


}

export const signOut = async function (req, res, next) {

}




