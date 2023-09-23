"use client"

import React from 'react'
import {  List, Button, Box } from "@mantine/core";
// import { MantineProvider } from "@mantine/core";

export const ListDemo = () => {
	return (
		<Box m={10}>
			<List>
				<List.Item>Clone or download repository from GitHub</List.Item>
				<List.Item>Install dependencies with yarn</List.Item>
				<List.Item>To start development server run npm start command</List.Item>
				<List.Item>Run tests to make sure your changes do not break the build</List.Item>
				<List.Item>Submit a pull request once you are done</List.Item>
			</List>
			<Button variant="filled">Hi</Button>
		</Box>

	)
}
