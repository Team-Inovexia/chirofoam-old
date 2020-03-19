import React, {useState} from 'react'
import {Link} from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import SEO from '~/components/seo'
import xf1 from "~/assets/img/xf1.jpg"
import ol1 from "~/assets/img/ol1.jpg"
import step1_img from "../assets/img/Chirofoam-Step1-SleepPosition.png"
import step2_img from "../assets/img/Chirofoam-Step2-Surface.png"
import step3_img from "../assets/img/Chirofoam-Step3-BodyType.png"
import step4_img from "../assets/img/Chirofoam-Step4-Temperature.png"
import step5_img from "../assets/img/Chirofoam-Step5-Exercise.png"
import step6_img from "../assets/img/Chirofoam-Step6-BackPain.png"

const TAKETEST = (props) => {
  const [selectedChoices, setSelectedChoices] = useState([
    {
      id: 1,
      choice: 0,
      choiceLabel: ''
    }, {
      id: 2,
      choice: 0,
      choiceLabel: ''
    }, {
      id: 3,
      choice: 0,
      choiceLabel: ''
    }, {
      id: 4,
      choice: 0,
      choiceLabel: ''
    }, {
      id: 5,
      choice: 0,
      choiceLabel: ''
    }, {
      id: 6,
      choice: 0,
      choiceLabel: ''
    }
  ])
  const [activeTab, setActiveTab] = useState('1')
  const [enableProcess, setEnableProcess] = useState(true)
  const getElement = (seletor) => {
    return document.querySelector(seletor)
  }
  const startTest = () => {
    getElement("#start-test").classList.toggle("d-none")
    getElement("#take-test").classList.toggle("d-none")
  }
  const handleChoiceSelect = (event, stepID, Choice, choiceLabel) => {
    const choiceIndex = selectedChoices.findIndex((step => step.id === stepID))
    selectedChoices[choiceIndex].choice = Choice
    selectedChoices[choiceIndex].choiceLabel = choiceLabel
    if (stepID === 6) {
      setSelectedChoices(selectedChoices)
      setEnableProcess(false)
    }
  }
  const goTo = (event, checkStep, tabID) => {
    if (checkStep) {
      const stepID = (parseInt(tabID) - 1)
      const choiceIndex = selectedChoices.findIndex((step => step.id === stepID))
      if (selectedChoices[choiceIndex].choice !== 0) {
        setActiveTab(tabID)
      }
    } else {
      setActiveTab(tabID)
    }
  }
  const processTest = (event) => {
    const Step2 = selectedChoices[selectedChoices.findIndex((step => step.id === 2))]
    const Step3 = selectedChoices[selectedChoices.findIndex((step => step.id === 3))]
    const Step6 = selectedChoices[selectedChoices.findIndex((step => step.id === 6))]
    if (Step6.choice !== 0) {
      if ((Step2.choice === 1) || (Step3.choice === 1)) {
        getElement("#sorry").classList.toggle("d-none")
      } else if ((Step2.choice === 4) || (Step6.choice === 1) || ((Step2.choice === 3) && (Step3.choice === 4))) {
        getElement("#xf").classList.toggle("d-none")
        getElement("#xf-block").classList.toggle("d-none")
        getElement("#success").classList.toggle("d-none")
      } else {
        getElement("#ol").classList.toggle("d-none")
        getElement("#ol-block").classList.toggle("d-none")
        getElement("#success").classList.toggle("d-none")
      }
      getElement("#take-test").classList.toggle("d-none")
      getElement("#result").classList.toggle("d-none")
    }
  }
  return (<> <SEO title="TAKE THE TEST" description="We understand that everyone has different needs and there is no such thing as the perfect mattress that works for everyone. This is why we have created the Chirofoam test to see if the Chirofoam mattress is the right fit for you." /><Header/>
  <section className="mb-0 py-3 pb-lg-5 pb-xl-5" id="start-test">
    <Container className="pb-lg-5 pb-xl-5">
      <Row className="mx-0">
        <h4 className="text-center color-primary erbaum-bold text-uppercase w-100 pt-2 pt-sm-5 mt-0 mt-sm-5">See if the Chirofoam mattress is right for you. Take the test!</h4>
        <p className="pt-0 text-center w-100 pt-2 pt-lg-4 pt-xl-4 color-secondary" style={{
            fontSize: '15px'
          }}>We understand that everyone has different needs and there is no such thing as the perfect mattress that works for everyone. This is why we have created the Chirofoam test to see if the Chirofoam mattress is the right fit for you.</p>
        <p className="pt-0 text-center w-100 pt-2 color-secondary" style={{
            fontSize: '15px'
          }}>Our objective is to provide our customers with a better sleep and a more comfortable mattress than what they currently sleep on. Although the Chirofoam mattress works great for the majority of people, by taking this test you will be able to find out if the Chirofoam mattress is a good fit for you!</p>
        <p className="cta mt-0 pt-sm-4 pt-lg-5 pt-xl-5 w-100 text-center mt-4 mt-sm-0">
          <button onClick={startTest} className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0">START NOW</button>
        </p>
      </Row>
    </Container>
  </section>
  <section className="mb-0 py-5 bg-white position-relative d-none" id="take-test">
    <div className="container-large no-gutters">
      <div className="col-md-12">
        <Nav tabs={true} id="tabs" className="d-flex all-steps">
          <NavItem className={(
              activeTab === '1'
              ? 'active '
              : '')}>
            <NavLink className={(
                activeTab === '1'
                ? 'active '
                : '') + 'px-xs-0 px-lg-3 px-sm-0 h-100'}>
              <div className="d-flex flex-column h-100">
                <span className="fs-2 fs-md-4 fs-sm-3">Step
                  <br/>1</span>
                <span className="fs-2 d-none d-md-block mt-auto">Sleep Position</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem className={(
              activeTab === '2'
              ? 'active '
              : '')}>
            <NavLink className={(
                activeTab === '2'
                ? 'active '
                : '') + 'px-xs-0 px-lg-3 px-sm-0 h-100'}>
              <div className="d-flex flex-column h-100">
                <span className="fs-2 fs-md-4 fs-sm-3">Step
                  <br/>2</span>
                <span className="fs-2 d-none d-md-block mt-auto">Surface</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem className={(
              activeTab === '3'
              ? 'active '
              : '')}>
            <NavLink className={(
                activeTab === '3'
                ? 'active '
                : '') + 'px-xs-0 px-lg-3 px-sm-0 h-100'}>
              <div className="d-flex flex-column h-100">
                <span className="fs-2 fs-md-4 fs-sm-3">Step
                  <br/>3</span>
                <span className="fs-2 d-none d-md-block mt-auto">Body Type</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem className={(
              activeTab === '4'
              ? 'active '
              : '')}>
            <NavLink className={(
                activeTab === '4'
                ? 'active '
                : '') + 'px-xs-0 px-lg-3 px-sm-0 h-100'}>
              <div className="d-flex flex-column h-100">
                <span className="fs-2 fs-md-4 fs-sm-3">Step
                  <br/>4</span>
                <span className="fs-2 d-none d-md-block mt-auto">Temperature</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem className={(
              activeTab === '5'
              ? 'active '
              : '')}>
            <NavLink className={(
                activeTab === '5'
                ? 'active '
                : '') + 'px-xs-0 px-lg-3 px-sm-0 h-100'}>
              <div className="d-flex flex-column h-100">
                <span className="fs-2 fs-md-4 fs-sm-3">Step
                  <br/>5</span>
                <span className="fs-2 d-none d-md-block mt-auto">Exercise</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem className={(
              activeTab === '6'
              ? 'active '
              : '')}>
            <NavLink className={(
                activeTab === '6'
                ? 'active '
                : '') + 'px-xs-0 px-lg-3 px-sm-0 h-100'}>
              <div className="d-flex flex-column h-100">
                <span className="fs-2 fs-md-4 fs-sm-3">Step
                  <br/>6</span>
                <span className="fs-2 d-none d-md-block mt-auto">Back Pain</span>
              </div>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="take-test-tab" activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="tab-content">
              <div className="py-3 py-lg-5 col-12 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="m-0">
                  <Col className="col-12 col-lg-7 col-xl-7">
                    <div className="left-content">
                      <h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">1. In what position do you most frequently sleep at night?</h3>
                      <div>
                        <input type="radio" value="1" name="first_stepopt" id="radioa1" onChange={e => handleChoiceSelect(e, 1, 1, 'I sleep on my side.')}/>
                        <label className="opt_heading" htmlFor="radioa1">a. I sleep on my side.</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="first_stepopt" id="radioa2" onChange={e => handleChoiceSelect(e, 1, 2, 'I sleep on my back and/or stomach.')}/>
                        <label className="opt_heading" htmlFor="radioa2">b. I sleep on my back and/or stomach.</label>
                      </div>
                      <div>
                        <input type="radio" value="3" name="first_stepopt" id="radioa3" onChange={e => handleChoiceSelect(e, 1, 3, 'I toss and turn all the time.')}/>
                        <label className="opt_heading" htmlFor="radioa3">c. I toss and turn all the time.</label>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-5 col-xl-5">
                    <div>
                      <img className="img-fluid" src={step1_img} alt="Chirofoam-Step1-SleepPosition"/>
                    </div>
                  </Col>
                  <Col className="col-12">
                    <button className="btn text-white btn-custom-secondary" onClick={e => goTo(e, true, '2')}>Continue</button>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="tab-content">
              <div className="py-3 py-lg-5 col-12 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="m-0">
                  <Col className="col-12 col-lg-7 col-xl-7">
                    <div className="left-content">
                      <h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">2. On which surface do you think you would have the most comfortable sleep?</h3>
                      <div>
                        <input type="radio" value="1" name="second_stepopt" id="radiob1" onChange={e => handleChoiceSelect(e, 2, 1, 'Soft – Like sleeping in a big pile of pillows that you sink into.')}/>
                        <label className="opt_heading" htmlFor="radiob1">a. Soft – Like sleeping in a big pile of pillows that you sink into.</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="second_stepopt" id="radiob2" onChange={e => handleChoiceSelect(e, 2, 2, 'Medium – Like sleeping on the couch with regular cushions.')}/>
                        <label className="opt_heading" htmlFor="radiob2">b. Medium – Like sleeping on the couch with regular cushions.</label>
                      </div>
                      <div>
                        <input type="radio" value="3" name="second_stepopt" id="radiob3" onChange={e => handleChoiceSelect(e, 2, 3, 'Firm – Like sleeping on the floor with a thick and fluffy comforter underneath.')}/>
                        <label className="opt_heading" htmlFor="radiob3">c. Firm – Like sleeping on the floor with a thick and fluffy comforter underneath.</label>
                      </div>
                      <div>
                        <input type="radio" value="4" name="second_stepopt" id="radiob4" onChange={e => handleChoiceSelect(e, 2, 4, 'Extra Firm – Like sleeping on the bare floor with just a carpet underneath.')}/>
                        <label className="opt_heading" htmlFor="radiob4">d. Extra Firm – Like sleeping on the bare floor with just a carpet underneath.</label>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-5 col-xl-5">
                    <div>
                      <img className="img-fluid" src={step2_img} alt="Chirofoam-Step2-Surface"/>
                    </div>
                  </Col>
                  <Col className="col-12">
                    <button className="btn text-white btn-custom-primary mr-2" onClick={e => goTo(e, false, '1')}>Back</button>
                    <button className="btn text-white btn-custom-secondary" onClick={e => goTo(e, true, '3')}>Continue</button>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="tab-content">
              <div className="py-3 py-lg-5 col-12 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="m-0">
                  <Col className="col-12 col-lg-7 col-xl-7">
                    <div className="left-content">
                      <h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">3. What would you consider your body type?</h3>
                      <div>
                        <input type="radio" value="1" name="third_stepopt" id="radioc1" onChange={e => handleChoiceSelect(e, 3, 1, 'Small – I am very small and/or very skinny. (Typically under 130lbs.)')}/>
                        <label className="opt_heading" htmlFor="radioc1">a. Small – I am very small and/or very skinny. (Typically under 130lbs.)</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="third_stepopt" id="radioc2" onChange={e => handleChoiceSelect(e, 3, 2, 'Average – I am average height and average build. (Between 130lbs and 210lbs.)')}/>
                        <label className="opt_heading" htmlFor="radioc2">b. Average – I am average height and average build. (Between 130lbs and 210lbs.)</label>
                      </div>
                      <div>
                        <input type="radio" value="3" name="third_stepopt" id="radioc3" onChange={e => handleChoiceSelect(e, 3, 3, 'Large – I am taller than average and/or a little heavier than average. (Between 210lbs and 280lbs.)')}/>
                        <label className="opt_heading" htmlFor="radioc3">c. Large – I am taller than average and/or a little heavier than average. (Between 210lbs and 280lbs.)</label>
                      </div>
                      <div>
                        <input type="radio" value="4" name="third_stepopt" id="radioc4" onChange={e => handleChoiceSelect(e, 3, 4, 'Extra Large – I have a very large frame and on the heavy side. (Over 280lbs.)')}/>
                        <label className="opt_heading" htmlFor="radioc4">d. Extra Large – I have a very large frame and on the heavy side. (Over 280lbs.)</label>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-5 col-xl-5">
                    <div>
                      <img className="img-fluid" src={step3_img} alt="Chirofoam-Step3-BodyType"/>
                    </div>
                  </Col>
                  <Col className="col-12">
                    <button className="btn text-white btn-custom-primary mr-2" onClick={e => goTo(e, false, '2')}>Back</button>
                    <button className="btn text-white btn-custom-secondary" onClick={e => goTo(e, true, '4')}>Continue</button>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="tab-content">
              <div className="py-3 py-lg-5 col-12 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="m-0">
                  <Col className="col-12 col-lg-7 col-xl-7">
                    <div className="left-content">
                      <h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">4. Do you get hot and sweaty or very cold when you sleep at night?</h3>
                      <div>
                        <input type="radio" value="1" name="forth_stepopt" id="radiod1" onChange={e => handleChoiceSelect(e, 4, 1, 'I sleep very cool and always need to wrap myself up to keep warm.')}/>
                        <label className="opt_heading" htmlFor="radiod1">a. I sleep very cool and always need to wrap myself up to keep warm.</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="forth_stepopt" id="radiod2" onChange={e => handleChoiceSelect(e, 4, 2, 'My sleep temperature is not a problem, I’m never too hot or too cold.')}/>
                        <label className="opt_heading" htmlFor="radiod2">b. My sleep temperature is not a problem, I’m never too hot or too cold.</label>
                      </div>
                      <div>
                        <input type="radio" value="3" name="forth_stepopt" id="radiod3" onChange={e => handleChoiceSelect(e, 4, 3, 'I get hot once in a while but nothing drastic.')}/>
                        <label className="opt_heading" htmlFor="radiod3">c. I get hot once in a while but nothing drastic.</label>
                      </div>
                      <div>
                        <input type="radio" value="4" name="forth_stepopt" id="radiod4" onChange={e => handleChoiceSelect(e, 4, 4, 'I get hot and sweaty when I sleep and wake up in the middle of the night constantly.')}/>
                        <label className="opt_heading" htmlFor="radiod4">d. I get hot and sweaty when I sleep and wake up in the middle of the night constantly.</label>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-5 col-xl-5">
                    <div>
                      <img className="img-fluid" src={step4_img} alt="Chirofoam-Step4-Temperature"/>
                    </div>
                  </Col>
                  <Col className="col-12">
                    <button className="btn text-white btn-custom-primary mr-2" onClick={e => goTo(e, false, '3')}>Back</button>
                    <button className="btn text-white btn-custom-secondary" onClick={e => goTo(e, true, '5')}>Continue</button>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div className="tab-content">
              <div className="py-3 py-lg-5 col-12 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="m-0">
                  <Col className="col-12 col-lg-7 col-xl-7">
                    <div className="left-content">
                      <h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">5. How often to you play sports, work out, exercise, and/or go for a run?</h3>
                      <div>
                        <input type="radio" value="1" name="fifth_stepopt" id="radioe1" onChange={e => handleChoiceSelect(e, 5, 1, '3-7 times a week.')}/>
                        <label className="opt_heading" htmlFor="radioe1">a. 3-7 times a week.</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="fifth_stepopt" id="radioe2" onChange={e => handleChoiceSelect(e, 5, 2, '1-2 times a week.')}/>
                        <label className="opt_heading" htmlFor="radioe2">b. 1-2 times a week.</label>
                      </div>
                      <div>
                        <input type="radio" value="3" name="fifth_stepopt" id="radioe3" onChange={e => handleChoiceSelect(e, 5, 3, 'A few times a month.')}/>
                        <label className="opt_heading" htmlFor="radioe3">c. A few times a month.</label>
                      </div>
                      <div>
                        <input type="radio" value="4" name="fifth_stepopt" id="radioe4" onChange={e => handleChoiceSelect(e, 5, 4, 'Never.')}/>
                        <label className="opt_heading" htmlFor="radioe4">d. Never.</label>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-5 col-xl-5">
                    <div>
                      <img className="img-fluid" src={step5_img} alt="Chirofoam-Step5-Exercise"/>
                    </div>
                  </Col>
                  <Col className="col-12">
                    <button className="btn text-white btn-custom-primary mr-2" onClick={e => goTo(e, false, '4')}>Back</button>
                    <button className="btn text-white btn-custom-secondary" onClick={e => goTo(e, true, '6')}>Continue</button>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="6">
            <div className="tab-content">
              <div className="py-3 py-lg-5 col-12 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="m-0">
                  <Col className="col-12 col-lg-7 col-xl-7">
                    <div className="left-content">
                      <h3 className="head_point filson-pro-reg pb-2 pb-lg-4 pb-xl-4">6. Do you suffer from back pain?</h3>
                      <div>
                        <input type="radio" value="1" name="sixth_stepopt" id="radiof1" onChange={e => handleChoiceSelect(e, 6, 1, 'I suffer from severe back pain constantly.')}/>
                        <label className="opt_heading" htmlFor="radiof1">a. I suffer from severe back pain constantly.</label>
                      </div>
                      <div>
                        <input type="radio" value="2" name="sixth_stepopt" id="radiof2" onChange={e => handleChoiceSelect(e, 6, 2, 'I get occasional back pain that is severe.')}/>
                        <label className="opt_heading" htmlFor="radiof2">b. I get occasional back pain that is severe.</label>
                      </div>
                      <div>
                        <input type="radio" value="3" name="sixth_stepopt" id="radiof3" onChange={e => handleChoiceSelect(e, 6, 3, 'I get occasional back pain that is mild.')}/>
                        <label className="opt_heading" htmlFor="radiof3">c. I get occasional back pain that is mild.</label>
                      </div>
                      <div>
                        <input type="radio" value="4" name="sixth_stepopt" id="radiof4" onChange={e => handleChoiceSelect(e, 6, 4, 'I do not suffer from back pain.')}/>
                        <label className="opt_heading" htmlFor="radiof4">d. I do not suffer from back pain.</label>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-5 col-xl-5">
                    <div>
                      <img className="img-fluid" src={step6_img} alt="Chirofoam-Step6-BackPain"/>
                    </div>
                  </Col>
                  <Col className="col-12">
                    <button className="btn text-white btn-custom-primary mr-2" onClick={e => goTo(e, false, '5')}>Back</button>
                    <button className="btn text-white btn-custom-secondary" disabled={enableProcess} onClick={e => processTest(e)}>Continue</button>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  </section>
  <section id="result" className="d-none">
    <Container>
      <Row className="py-3 py-sm-5 mb-0 mb-sm-5 mx-0">
        <Col className="col-12">
          <h3 className="text-center">Answer</h3>
          <div id="sorry" className="d-none text-center">
            We are sorry, but based on the answers you have provided we do not think that the Chirofoam mattress will be a good fit for you. Some of the crucial answers you provided did not match well with the Chirofoam mattress.
            <br/>
            Visit our preferred retail partner
            <a href="https://nationalmattress.ca" rel="noopener noreferrer" target="_blank">National Mattress</a>, or try their mattress selector online. You will definitely find a mattress that better suits your needs and they offer free Canada-Wide delivery on many of their mattresses. You may also try the Chirofoam mattress at any one of their locations to see if it a good fit for you.
          </div>
          <div id="xf" className="d-none text-center">
            The Chirofoam Mattress looks like it will be an average fit for you based on the answers you provided.
          </div>
          <div id="ol" className="d-none text-center">
            The Chirofoam Mattress looks like it will be the ideal fit for you based on the answers you provided. You matched up well on all your answers!
          </div>
          <h3>Results</h3>
          <ul className="list-unstyled">
            {
              selectedChoices.map((step, i) => <li key={i}>
                <strong>{step.id}</strong>
                <span>{step.choiceLabel}</span>
              </li>)
            }
          </ul>
          <div id="success" className="d-none">
            <div className="tip_div">
              <p>
                <em>Note:-
                </em>The Chirofoam Mattress looks like it will be the ideal fit for you based on the answers you provided. You matched up well on all your answers!</p>
            </div>
          </div>
          <div id="xf-block" className="d-none">
            <div className="based-on-answer text-center">
              <h4>Recommended Mattress</h4>
              <p>Based on your input, this mattress is a good fit for you.</p>
            </div>
            <div className="text-center">
              <div className="pdt-image d-inline-block position-relative mb-3">
                <img title="Chirofoam™ Memory Foam Mattress, Toronto, ON" alt="chirofoamtm-memory-foam-mattress-toronto-on" src={xf1} className="img-fluid"/>
                <div className="b-now d-flex justify-content-center align-items-center position-absolute w-100 h-100" style={{
                    top: '0'
                  }}>
                  <Link to={`/product/the-chirofoam™-xf-mattress-extra-firm/`} className="btn text-white btn-custom-primary">BUY NOW</Link>
                </div>
                <h4 style={{
                    fontSize: 'medium'
                  }}>The Chirofoam™ XF Mattress – Extra Firm</h4>
              </div>
            </div>
          </div>
          <div id="ol-block" className="d-none">
            <div className="based-on-answer text-center">
              <h4>Recommended Mattress</h4>
              <p>Based on your input, this mattress is a good fit for you.</p>
            </div>
            <div className="text-center">
              <div className="pdt-image d-inline-block position-relative mb-3">
                <img title="Chirofoam™ Memory Foam Mattress, Toronto, ON" alt="chirofoamtm-memory-foam-mattress-toronto-on" src={ol1} className="img-fluid"/>
                <div className="b-now d-flex justify-content-center align-items-center position-absolute w-100 h-100" style={{
                    top: '0'
                  }}>
                  <Link to={`/product/the-original-chirofoam™-mattress-luxury-firm/`} className="btn text-white btn-custom-primary">BUY NOW</Link>
                </div>
                <h4 style={{
                    fontSize: 'medium'
                  }}>THE ORIGINAL CHIROFOAM™ MATTRESS – LUXURY FIRM</h4>
              </div>
            </div>
          </div>
          <div className="btn_row1">
            <div className="tip_div">
              <p>
                <em>Tip:
                </em>If you sleep with a partner, let them take the test to see if your results match up.</p>
              <p>As always, your purchase comes with a 100-night sleep trial, making it easy to return the Chirofoam mattress within 100 nights if you are not 100% satisfied!</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="d-none">
    <Container>
      <Row className="py-3 py-sm-5 mb-0 mb-sm-5 mx-0">
        <div className="m-auto text-center d-sm-flex">
          <Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5">
            <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
              <Link to="/take-test/" className="btn-cta color-primary erbaum-bold space-1">TAKE THE TEST</Link>
            </p>
            See if Chirofoam™ is right for you.
          </Col>
          <Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5">
            <p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
              <Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">BUY NOW</Link>
            </p>
            Start your journey to a better sleep!
          </Col>
        </div>
      </Row>
    </Container>
  </section>
  <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
    <Container className="pb-0 pb-sm-5">
      <Row className="mx-0">
        <p className="text-center w-100 star">
          <i className="fa fa-star star-small"></i>
          <i className="fa fa-star star-medium ml-2"></i>
          <i className="fa fa-star star-large mx-2"></i>
          <i className="fa fa-star star-medium mr-2"></i>
          <i className="fa fa-star star-small"></i>
        </p>
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>“A great quality mattress I enjoy waking up on every day…”
          <br/>
          -Mark F. from Toronto, Ontario</p>
        <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
          <Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</Link>
        </p>
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p>
      </Row>
    </Container>
  </section>

  <Footer disabletest={true}/>
</>)
}
export default TAKETEST
