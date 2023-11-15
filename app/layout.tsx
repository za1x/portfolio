import Head from "next/head"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Adam Radzicki | Front-end portfolio',
	description: 'Adam Radzicki is Junior Front-end Developer learning React & Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-15rem]"></div>

				<Header />
				{children}
			</body>
		</html>
	)
}
