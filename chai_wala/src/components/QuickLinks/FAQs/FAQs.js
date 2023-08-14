import React, { useState } from "react";
import "./FAQs.scss";
import Footer from "../../Footer/Footer";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";

function FAQs() {
  const [answer, setAnswer] = useState("false");
  const [answer1, setAnswer1] = useState("false");
  const [answer2, setAnswer2] = useState("false");
  const [answer3, setAnswer3] = useState("false");
  const [answer4, setAnswer4] = useState("false");
  const [answer5, setAnswer5] = useState("false");
  const [answer6, setAnswer6] = useState("false");
  const [answer7, setAnswer7] = useState("false");
  const [answer8, setAnswer8] = useState("false");


  function aanswer() {
    setAnswer(!answer);
  }
  function aanswer1() {
    setAnswer1(!answer1);
  }function aanswer2() {
    setAnswer2(!answer2);
  }function aanswer3() {
    setAnswer3(!answer3);
  }function aanswer4() {
    setAnswer4(!answer4);
  }function aanswer5() {
    setAnswer5(!answer5);
  }function aanswer6() {
    setAnswer6(!answer6);
  }function aanswer7() {
    setAnswer7(!answer7);
  }function aanswer8() {
    setAnswer8(!answer8);
  }
  return (
    <>
      <div className="faqs">
        <h1>FRANCHISE BUSINESS QUESTIONNAIRE</h1>
        <div className="questions">
          <p>
            Who is called franchisor?{" "}
            <span onClick={aanswer}>
              {answer ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer ? (
            <div></div>
          ) : (
            <div>
              {" "}
              <p id="answer">
                The “franchisor” is the person or corporation that owns the
                trademarks and business model. The franchisor licenses the use
                of the trademark and business model to the franchisee, usually
                in exchange for an upfront payment and ongoing royalty payments.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <p>
            Who is called franchisee?{" "}
            <span onClick={aanswer1}>
              {answer1 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer1 ? (
            <div></div>
          ) : (
            <div>
              <p id="answer">
                The “franchisee” is the person or Corporation that owns and
                operates the business using the trademark and business model
                system licensed from the franchisor.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <p>
            What is the difference between franchisor and franchisee?{" "}
            <span onClick={aanswer2}>
              {answer2 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer2 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            While a franchisor is an established entrepreneur with a licensed
            business model, a franchisee is a person or corporation that owns
            and operates the business using the business model licensed by the
            franchisor.
          </p>
          </div>)}
        </div>
        <div className="questions">
          <p>
            How does franchise work?{" "}
            <span onClick={aanswer3}>
              {answer3 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer3 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            A franchise enables you, the investor or franchisee, to operate a
            business. You pay a franchise fee and get a format or system
            developed by the company (franchisor), the right to use the
            franchisor’s name for a specific number of years, and assistance.
          </p>
          </div>)}
        </div>
        <div className="questions">
          <p>
            What Is Franchisee Business?{" "}
            <span onClick={aanswer4}>
              {answer4 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer4 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            A franchisor sells the right to open stores and sell products or
            services using its brand, expertise, and intellectual property. It
            is the original or existing business that sells the right to use its
            name and idea. <br /> <b>Franchising</b> is a business relationship
            between two entities wherein one party allows another to sell its
            products and intellectual property. For example, several fast food
            chains like Domino’s and Mcdonald’s operate in India through
            franchising. <br /> <b>Relationship;</b> the relationship between a
            franchisee and a franchisor is inherently one of advisee and
            advisor. The franchisor provides guidance and support concerning
            general business strategies such as hiring and training staff,
            setting up shop, advertising its products or services, sourcing its
            supply, and so on. <br />{" "}
            <b>What is the minimum amount to start a franchise?</b> The cost to
            start a franchise can vary significantly depending on the specific
            franchise business and the industry segment where you plan to open
            your business. <br /> <b>Is a franchisor an owner?</b> No, the
            franchisor is the entity that owns the intellectual property,
            patents, and trademarks of the brand or business being franchised. A
            franchisee buys the right to operate a location of the franchisor.
          </p>
          </div>)}
        </div>
        <div className="questions">
          <p>
            How to start a franchise?{" "}
            <span onClick={aanswer5}>
              {answer5 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer5 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            Research Franchises, Evaluate Opportunities, Evaluate Costs, Draft a
            Business Plan, Get the Franchise License Agreement, Form a Business
            Entity, Choose Your First Business Space, and Hire Employees. <br />{" "}
            <b>Do franchisors make money?</b> A franchisor makes money from
            royalties and fees paid by the franchise owners. A franchise owner
            makes money through profits received from sales and service
            transactions. This is generally the leftover amount of money
            received from revenue after overhead costs are taken out. <br />{" "}
            <b>Is franchise ownership risky?</b> It can be risky to open a
            franchise — just like it is with starting any business — but with
            the right preparation and due diligence, the risk level can be
            significantly lowered. <br />{" "}
            <b>Franchisees Obligations and Restrictions;</b> (1) Franchisees
            must devote continuous best efforts to the development, management,
            and operation of their business. (2) Franchisees may not conduct any
            other business or activity at the restaurant without the
            franchisor’s prior written approval. They may sell only products
            approved by the franchisor and they must offer for sale the full
            menu prescribed by the franchisor.
          </p>
          </div>)}
        </div>
        <div className="questions">
          <p>
            Can a franchise lose money?{" "}
            <span onClick={aanswer6}>
              {answer6 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer6 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            A failed franchise hurts the franchisor. Of course, if things don’t
            go well, the franchisee and the franchisor both lose money. The
            franchisor’s losses include money that was not recovered from
            initial training and supporting the franchisee, plus the loss of
            royalty fee that the franchisee unit failed to produce. A closed
            unit also reduces the amount of operating sum available to the
            franchisor to cover ongoing costs, and while it adds another unit to
            the franchisor’s sales inventory, it may impede the franchisor’s
            ability to sell franchises because prospective franchisees will
            become aware of the failure. <br /> <b>Franchisee Loses;</b>{" "}
            Franchisee losses may be more than obvious which include all the
            money that you invested, including the franchise fee and all the
            start-up costs, such as payments to the landlord, professional
            advisors, and suppliers. And unfortunately, your losses may not end
            when you shut down your business. <br /> Closing your unit may be a
            breach of the franchise agreement and may trigger the payment of
            liquidated damages. After taking the unit off the market and selling
            it to you, the franchisor expected you to succeed. Now that you’ve
            failed, and breached the contract, the franchisor may hold you
            responsible for ongoing fees, such as monthly royalties and
            advertising fees, and for royalties fees that were anticipated from
            your unit. <br /> By selling the business—even at a discounted
            price—you may be able to curtail these obligations, but that, too,
            depends on the franchise agreement and, of course, the successful
            sale of the business. There may not be a market for your failed
            unit, even at a steep discount.
          </p>
          </div>)}
        </div>
        <div className="questions">
          <p>
            Be sure you understand the franchise agreement{" "}
            <span onClick={aanswer7}>
              {answer7 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer7 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            No one buys a franchise with the idea that they’re going to fail,
            but failures occur. That’s why it’s important to review the details
            of a franchise agreement before you make a commitment to the
            franchisor. The best way to understand the agreement is to consult
            with an attorney.
          </p>
          </div>)}
        </div>
        <div className="questions">
          <p>
            Is franchise fee refundable in India?
            <span onClick={aanswer8}>
              {answer8 ? <BsPlusCircleFill /> : <BiSolidMinusCircle />}
            </span>
          </p>
          {answer8 ? (
            <div></div>
          ) : (
            <div>
          <p id="answer">
            Fees and royalty clause; this clause mentions the non-refundable
            franchise fees which the franchisee has to make to the franchisor
            and also the one-time fees if any. The royalty clause is the
            non-refundable portion of the payment (usually in percentage) that
            the franchisee is obliged to make to the franchisor.
          </p>
          </div>)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQs;
