import { FC } from "react"
import { appStore, billingImg, google } from "../assets"
import { layout, styles } from "../util/style"

const Billing: FC = ():JSX.Element => {
	return (
		<section
			id="about~"
			className={`${layout.sectionReverse} items-center relative`}>
			<div className={`${layout.sectionImgReverse}`}>
				<img
					src={billingImg}
					alt="billing img"
					className="w-[100%] h-[100%] relative z-[5]"
				/>

				<div className="absolute z-[1] -left-1/2 w-[50%] h-[50%] rounded-full top-0 white__gradient" />
				<div className="absolute z-[3] w-[50%] -left-1/2 h-[55%] bottom-0 rounded-full pink__gradient" />
			</div>
			<div className={`${layout.sectionIfo}`}>
				<h2 className={styles.heading2}>
					Hisob kitob va fakturial <br className="sm:block hidden" />
					osongina boshqaring
				</h2>
				<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate minima dignissimos aut laudantium consectetur,
					fugiat saepe debitis possimus fuga animi?
				</p>
				<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
					<img
						src={google}
						alt="google"
						className={`${styles.imgLink}`}
					/>
					<img
						src={appStore}
						alt="google"
						className={`${styles.imgLink}`}
					/>
				</div>
			</div>
		</section>
	)
}

export default Billing
