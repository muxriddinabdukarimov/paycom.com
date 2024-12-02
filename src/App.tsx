import { useState, useEffect } from "react"
import {
	Billing,
	Business,
	Clients,
	Conrtact,
	Cta,
	Footer,
	Navbar,
	Testemonials,
} from "./components"
import Home from "./components/home"
import Statistics from "./components/statistics"
import { styles } from "./util/style"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { FaAngleDoubleUp } from "react-icons/fa"

const App = () => {
	const [theme, setTheme] = useState("dark")

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}

	const [showBackToTop, setShowBackToTop] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 100)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

	return (
		<div className={`bg-primary w-full overflow-hidden`}>
			<button
				onClick={toggleTheme}
				className={`fixed top-[120px] right-6 p-3 text-white rounded-full shadow-md transition-all ${
					theme === "light"
						? "bg-lightWhite hover:bg-blue-900"
						: "bg-lightWhite hover:bg-gray-700"
				}`}>
				{theme === "light" ? (
					<BsFillSunFill />
				) : (
					<BsFillMoonStarsFill />
				)}
			</button>

			<div className={`${styles.paddingX}`}>
				<div className={`${styles.container}`}>
					<Navbar />
				</div>
			</div>
			<div className={`${styles.flexStart}`}>
				<div className={`${styles.container}`}>
					<Home />
				</div>
			</div>
			<div
				className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.container}`}>
					<Statistics />
					<Conrtact />
					<Billing />
					<Business />
					<Testemonials />
					<Clients />
					<Cta />
					<Footer />
				</div>
			</div>

			<button
				onClick={scrollToTop}
				className={`fixed w-12 h-12 flex items-center justify-center text-xl right-6 bottom-6 z-50 transition-all duration-500 bg-blue-gradient hover:bg-gray-400 rounded-full ${
					showBackToTop ? "block" : "hidden"
				}`}>
				<FaAngleDoubleUp />
			</button>
		</div>
	)
}

export default App
