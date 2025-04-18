import React from "react";
import Seo from "../components/common/Seo";
import Header from "../components/Header";
import Collapsible from "../components/common/Collapsible";
import './faqPage.scss';
import {Title} from "../components/common/Title";
import {renderRichText} from "gatsby-source-contentful/rich-text";
import Footer from "../components/Footer";

const faqPageTemplate = ({pageContext}) => {
    const { faqQuestion } = pageContext.data;

    const seo = {
        title: "Kulturgarten Pinneberg e.V.: FAQ",
        description: "Alles, was es zu wissen gibt über den Kulturgarten Pinneberg e.V.!",
        ogImage: "http://images.ctfassets.net/36ul82y90g9q/3d4zbFdAuJ4S72GtTm4Q1Z/3f5c2e09cea50e9b6badfd46ced6c902/IMG_7809_websize.jpg"
    }

    function groupAndSortFaq(faqArray) {
        const groupedData = {};

        faqArray.forEach(({ category, question, answer }) => {
            if (!groupedData[category]) {
                groupedData[category] = [];
            }
            groupedData[category].push({ question, answer });
        });

        for (let category in groupedData) {
            groupedData[category].sort((a, b) => a.question.localeCompare(b.question)); // Sorting by question
        }

        return groupedData;
    }

    const sortedFaq = groupAndSortFaq(faqQuestion);

    return (
        <>
            <Seo title={seo.title} description={seo.description} ogImage={seo.ogImage}/>
            <Header/>
            <section className="faq wrapper start">
                <Title>FAQ</Title>
                {Object.keys(sortedFaq).map(category => (
                    <div key={category} className="faq__category-container">
                        <h3 className={"faq__category"}>{category}</h3>
                        <ul className="faq__list" aria-label={category}>
                            {sortedFaq[category].map(({ question, answer }, index) => (
                                <li key={index} className={"faq__list-item"}>
                                    <Collapsible question={question} answer={renderRichText(answer)}></Collapsible>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <Footer></Footer>
        </>
    );
};

export default faqPageTemplate;