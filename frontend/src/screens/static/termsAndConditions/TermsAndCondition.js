import React from "react";
import { Card } from "react-bootstrap";
import "./TermsAndCondtion.css";
import MainScreen from "../../../components/MainScreen";
function TermsAndCondtions() {
	return (
		<div className="TermsAndCondtionBackground">
			<br></br>
			<MainScreen title="Terms & Conditions">
				<br></br>
				<br></br>
				<Card
					style={{
						borderWidth: 5.0,
						borderRadius: 20,
						marginBottom: 90,
						paddingInline: 10,
						background: "rgba(200, 200, 230, 0.8)",
						width: 1200,
						marginLeft: 10,
					}}
				>
					<div
						style={{
							marginLeft: "5%",
							marginRight: "5%",
							marginTop: 60,
						}}
					>
						<br></br>
						<h1 style={{ fontSize: 55 }}>
							<b>Welcome to our site</b>{" "}
						</h1>
						<br></br>
						<ul>
							<div
								style={{
									fontSize: 20,
								}}
							>
								The process of acquiring materials is crucial to the construction industry for a variety of reasons.
                                Even though it appears to be a simple and uncomplicated operation, poor management of the material procurement process can have a significant negative impact on the project's success, profit margin, product quality, and labor utilization.
                                The need for a clearly defined construction process is of the utmost importance in the construction industry due to factors like limited storage due to the highly dynamic nature of the construction sites, highly distributed construction sites, contract-based labor, and tightly scheduled construction goals.
                                The architecture for a distributed procurement system described in this article aims to reduce procurement errors by giving important stakeholders access to clearly defined interfaces with appropriate functionality. A site manager would place an order, the chief procurement officer would authorize it, the finance team would then pay the supplier, and finally, once the supplier delivered the products, a warehouse manager at the site would check and accept the materials.
                                The communication problems that are prevalent in the construction business will no longer exist thanks to this method. The software will provide user-friendly interfaces that are appropriate for each job function, such as a mobile app for site and warehouse managers and a web application for finance personnel. Only the necessary functionality is made available to each user due to adequate authentication and authorization, preventing overlap in duties and job positions and allowing the building process to move forward smoothly with the least amount of conflict and communication issues.
                                A use case diagram containing the most significant scenarios, a thorough class diagram, sequence diagrams, and finally low fidelity and high fidelity user interface designs as user interaction diagrams make up this technical design document.


							</div>
						</ul>
						<br></br>
						<br></br>
						<h2 style={{ fontSize: 40 }}>5 Key Contract Management & Procurement Terms</h2>
						<ul>
							<div
								style={{
									fontSize: 20,
								}}
							>
								<b>1. Goods and Services</b>
								<br />
								Perhaps the most important term of all, this section specifies exactly which goods and services the vendor will provide you. To avoid confusion and miscommunication later on, this description should be as specific as possible.<br/><br/>
                                For example, you decide to hire a software development company to create a custom business intelligence application. In this case, it's better to include phrases such as "development, testing and support of a custom business intelligence application," rather than the vague phrase "software development services."
								<br />
								<br />
								<b>2. Prices and Payment</b>
								<br/>
								Once you delineate what you'll be receiving, you then must agree on how to pay for it. This section should address several important questions:<br/>
                                • What are the costs of the goods and services, in detail?<br/>
                                • How will you make the payments (cash, checks, credit cards, bank transfers)? Who will be responsible for receiving them?<br/>
                                • When are the payments due? Will you pay in a lump sum or in installments?<br/>
                                • What are the penalties for late payments?
								<br />
								<br />
								<b>3. Confidentiality and Proprietary Information</b><br/>
								First, decide who will ultimately own the products that are created as a result of the partnership. If you want to retain control, then specify that your business will take ownership of all intellectual property created during the provision of goods and services.<br/><br/>
                                Second, if you have sensitive or confidential data on hand that must be shared with the vendor, take steps to protect yourself as much as possible. The contract should include a clause that forbids sharing this information with third parties or using it for other purposes. <br />
								<br />
								<b>4. Limitation of Liability</b><br/>
								Nearly every contract includes a variety of "disclaimers" that limit parties' ability to bring a legal claim against each other or to recover damages. Your vendors will likely want to limit their liability to the costs of the products and services that they provide you, omitting any possible indirect effects.<br/><br/>
                                However, you should ensure that these clauses in your contract don't prevent you from claiming damages in the event of severe misconduct, such as fraud and gross negligence. If your mission-critical software has a fatal and egregious security flaw that exposes users' private information, for example, then you'll want to be able to seek adequate compensation for such an error.
								<br />
								<br />
								<b>5. Breaches and Remediation</b><br/>
								Finally, you need to plan ahead for what happens if either party decides to break the terms of the contract. If the relationship will be long-term and ongoing, then many contracts include the ability for either party to terminate "without cause," after a certain amount of time and with an appropriate notification in advance.<br/><br/>
                                Including the five terms above in your vendor contracts will be highly important in order to satisfy both parties and lessen the risk of a lengthy legal battle. Make sure that you go over the terms of the contract with a fine-toothed comb before signing and beginning your partnership.
								<br />
								<br />
							</div>
						</ul>
						
						
						<br></br>
						<br></br>
						<h2 style={{ fontSize: 40 }}>Lockers</h2>
						<ul>
							<div
								style={{
									fontSize: 20,
								}}
							>
								Lockers are provided for the use of members and their guests.
								<br />
								<br />
								Lockers may not be used overnight. Members who do so are liable to find that the lockers are opened and
								locker contents removed. Removal of such items is strictly at the members own risk.
								<br />
								<br />
								Padlocks may be purchased at reception.
								<br />
								<br />
								In the interest of safety and security please use the lockers provided. The club will have no liability
								for goods taken from the changing rooms or lockers.
								<br />
								<br />
							</div>
						</ul>
						<br></br>
						<br></br>
						<h2 style={{ fontSize: 40 }}>Opening Hours</h2>
						<ul>
							<div
								style={{
									fontSize: 20,
								}}
							>
								The club reserves the right to vary the opening hours as considered necessary for the proper operation
								of the centre.
							</div>
						</ul>
						<br></br>
						<br></br>
						<h2 style={{ fontSize: 40 }}> Disclaimer Of Liability For Legal Declarations</h2>

						<ul>
							<div
								style={{
									fontSize: 20,
								}}
							>
								If any provisions of these terms and conditions are found to be illegal, outdated, less legally
								preferable in a legal action or otherwise unenforceable by reason of the laws of any state or country in
								which these terms are intended to be effective, then to the extent and within the jurisdiction in which
								that term is illegal, invalid or unenforceable, it shall be severed and deleted from these terms and the
								remaining terms shall survive, remain in full force and effect. We refuse to accept liability for
								parties who do not make us openly aware of faults and later deny such observations in legal action -
								Access our website at your own, sole risk and liability without exception.
								<br />
								<br />
								These terms shall be governed by and interpreted in accordance with the laws of Ireland.
							</div>
						</ul>
						<br></br>
						<br></br>
						<h2 style={{ fontSize: 40 }}> Terms and Conditions for accessing this website</h2>

						<ul>
							<div
								style={{
									fontSize: 20,
								}}
							>
								1. By using this site you agree to be legally bound by these terms and conditions. If you do not agree
								to be legally bound by all the following terms you should not access and/or use our website or
								communicate in any way with the server hosting this website, namely, but not limited
								to,www.goldstonefitness.ie
								<br />
								<br />
								2. Henceforth in this legal declaration, you the website user, or associated parties will be known as
								either "you" or "the client". We, Goldstone Fitness Ltd. will be known as "We", "Us" or "Our Company",
								our general or individual assets will be addressed by the prefix "Our".
								<br />
								<br />
								3. You agree that we reserve the right to change these, or any, terms and conditions, content and/or
								declarations without prior notification, and changes made come into immediate effect upon being
								presented here. When such changes are made, you may revoke your agreement by engaging with our company
								online using this or any website, or continue to accept such changes
							</div>
						</ul>
						<br></br>
						<br></br>
					</div>
				</Card>
				<br></br>
				<br></br>
			</MainScreen>
		</div>
	);
}
export default TermsAndCondtions;
