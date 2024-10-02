import { Request, Response } from "express";
import api from "../../api";

export async function getAll(req: Request, res: Response) {
	try {
		const response = await api.get(process.env.API_URL as string, { params: req.query });
		res.json(response.data);
	} catch (error: any) {
		res.status(error.response.status).json({ message: error.message });
	}
}
export async function getById(req: Request, res: Response) {
	try {
		const { id } = req.params
		const response = await api.get(`${process.env.API_URL}/${id}`);
		res.json(response.data);
	} catch (error: any) {
		res.status(error.response.status).json({ message: error.message });
	}
}
export async function editClient(req: Request, res: Response) {
	try {
		const { id } = req.params
		const response = await api.patch(`${process.env.API_URL}/${id}`, req.body);
		res.json(response.data);
	} catch (error: any) {
		res.status(error.response.status).json({ message: error.message });
	}
}
export async function createClient(req: Request, res: Response) {
	try {

		const response = await api.post(process.env.API_URL as string, req.body,);
		res.json(response.data);
	} catch (error: any) {
		res.status(error.response.status).json({ message: error.message });
	}
}
export async function deleteClient(req: Request, res: Response) {
	try {
		const { id } = req.params
		const response = await api.delete(`${process.env.API_URL}/${id}`);
		res.json(response.data);
	} catch (error: any) {
		res.status(error.response.status).json({ message: error.message });
	}
}