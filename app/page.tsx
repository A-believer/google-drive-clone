"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
	const createFile = useMutation(api.files.createFile);
	const files = useQuery(api.files.getFiles);
	return (
		<div>
			<SignedIn>
				<SignOutButton>
					<Button>Sign Out</Button>
				</SignOutButton>
			</SignedIn>
			<SignedOut>
				<SignInButton mode="modal">
					<Button>Sign In</Button>
				</SignInButton>
			</SignedOut>
			{files?.map((data) => <div key={data._id}>{data.name}</div>)}
			<Button
				type='button'
				onClick={() => {
					createFile({ name: "David Abolade" });
				}}>
				Click Me
			</Button>
		</div>
	);
}
