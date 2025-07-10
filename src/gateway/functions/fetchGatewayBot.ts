import { Endpoints, REST_URL_BASE } from "#rest/index.js";
import type { APIGatewayBot } from "#types/index.js";

const ADDITIONAL_ERROR_MESSAGES: Partial<Record<number, string>> = {
	400: "The request contains invalid JSON.",
	401: "The authentication failed due to an invalid token.",
	429: "You are being rate limited.",
};

export const fetchGatewayBot = async (token: string): Promise<APIGatewayBot> => {
	if (typeof token !== "string") {
		throw new TypeError("The provided token is not a valid string.");
	}

	const headers = new Headers();

	headers.set("Authorization", `Bot ${token}`);
	headers.set("Content-Type", "application/json");

	const request = await fetch(`${REST_URL_BASE}/${Endpoints.gatewayBot()}`, {
		headers,
		method: "GET",
	});
	const { ok, status } = request;

	if (!ok) {
		const errorMessages = ["Failed to get the gateway information for the Discord bot."];
		const additionalErrorMessage = ADDITIONAL_ERROR_MESSAGES[status];

		if (additionalErrorMessage) {
			errorMessages.push(additionalErrorMessage);
		}

		throw new Error(errorMessages.join("\n"));
	}

	return (await request.json()) as APIGatewayBot;
};
