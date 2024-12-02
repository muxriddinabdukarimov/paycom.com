import { discount, robot } from "../assets"
import { styles } from "../util/style"
import Button from "./button"

const Home = () => {
	return (
		<section
			id="home"
			className={`${styles.paddingY} flex md:flex-row flex-col md:items-center `}>
			<div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
				<img
					src={`${robot}`}
					alt="robot"
					className="w-[100%] h-[100%] relative z-10 rounded-md"
				/>
			</div>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient">
					<img
						src={discount}
						alt="discount svg"
						className="w-[32px] h-[32px]"
					/>
					<p className={`${styles.paragraph} capitalize ml-2`}>
						<span className="text-white">20% </span> chegirma
						<span className="text-white"> 1 oylik </span> hisob
						uchun
					</p>
				</div>
				<div className="w-full">
					<h1 className={`${styles.heading1}`}>
						Yangi Avlod <br />
						<span className="text-gradient">To'lov usuli</span>
					</h1>
				</div>
				<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Doloribus, illum corporis. Porro perferendis adipisci
					dolorum quod qui quae aut quam!
				</p>
				<Button styles={"mt-4"} />
			</div>

			<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
			<div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
			<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
		</section>
	)
}

export default Home
