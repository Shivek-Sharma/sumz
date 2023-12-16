import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
    const [article, setArticle] = useState({
        url: '',
        summary: ''
    });

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState('');

    // Load data from localStorage on mount
    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // When an article is already summarized before
        const existingArticle = allArticles.find((item) => item.url === article.url);
        if (existingArticle) {
            return setArticle(existingArticle);
        }

        const response = await getSummary({ articleUrl: article.url });
        // console.log(response)

        if (response?.data) {
            const newArticle = { ...article, summary: response.data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        }
    };

    const handleCopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <section className="mt-16 w-full max-w-xl">
            {/* Search */}
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
                    <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />

                    <input type="url" placeholder="Enter a URL" value={article.url} onChange={(e) => setArticle({ ...article, url: e.target.value })} required className="url_input peer" />
                    {/* When you need to style an element based on the state of a sibling element, mark the sibling with the 'peer' class, and use peer-* modifiers to style the target element */}

                    <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"><p className="text-2xl pb-2">↵</p></button>
                </form>

                {/* Browse URL History */}
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {allArticles.map((article, index) => (
                        <div key={`link-${index}`} onClick={() => setArticle(article)} className="link_card">

                            <div className="copy_btn" onClick={() => handleCopy(article.url)}>
                                <img src={copied === article.url ? tick : copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain" />
                            </div>

                            <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                                {article.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Display Article Summary */}
            <div className="my-10 max-w-full flex justify-center items-center">
                {isFetching ? (
                    <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
                ) : (error ? (
                    <p className="font-inter font-bold text-black text-center">
                        Something went wrong, try again!
                        <br />
                        <span className="font-satoshi font-normal text-gray-700">
                            {error.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                                Article <span className="blue_gradient">Summary</span>
                            </h2>

                            <div className="summary_box">
                                <p className="font-inter font-medium text-md text-gray-700 text-justify">
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )))
                }
            </div>
        </section>
    )
}

export default Demo