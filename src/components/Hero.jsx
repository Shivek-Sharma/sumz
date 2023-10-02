import { logo } from "../assets";

const Hero = () => {
    return (
        <header className="w-full flex flex-col justify-center items-center">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} className="w-28 object-contain" alt="logo" />
            </nav>

            <h1 className="head_text">Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span></h1>
            <h2 className="desc">Say goodbye to long hours of reading dense texts. Simplify your reading with Sumz, an article summarizer that transforms lengthy articles into clear and concise summaries.</h2>
        </header>
    )
}

export default Hero