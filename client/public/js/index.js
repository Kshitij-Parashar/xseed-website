import React from 'react'
import ReactDOM from 'react-dom'
import request from 'request-promise'
// Import routing components
import {Router, Route} from 'react-router';
import moment from 'moment'
/*
 Here is where we're going to put our front-end logic

 */

class ListHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            existing:'',
            customerType: '',
            name: '',
            email:'',
            phone: '',
            country: '',
            city:'',
            message: '',
            confirmValue: '',
            error:false,
            success:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }


    handleChange(event) {
        console.log(event.target.name,event.target.value);
        if(event.target.name == 'ninja_forms_field_35') {
            if(event.target.value) {
                this.setState({existing: event.target.value});
            }else{
                this.setState({existing: ''});
            }
        }
        if(event.target.name == 'ninja_forms_field_50') {
            if(event.target.value) {
                this.setState({customerType: event.target.value});
            }else{
                this.setState({customerType: ''});
            }
        }
        if(event.target.name == 'ninja_forms_field_24') {
            if(event.target.value) {
                this.setState({name: event.target.value});
            }else{
                this.setState({name: ''});
            }
        } if(event.target.name == 'ninja_forms_field_26') {
            if(event.target.value) {
                this.setState({email: event.target.value});
            }else{
                this.setState({email: ''});
            }
        } if(event.target.name == 'ninja_forms_field_36') {
            if(event.target.value) {
                this.setState({phone: event.target.value});
            }else{
                this.setState({phone: ''});
            }
        } if(event.target.name == 'ninja_forms_field_53') {
            if(event.target.value) {
                this.setState({country: event.target.value});
            }else{
                this.setState({country: ''});
            }
        }if(event.target.name == 'ninja_forms_field_55') {
            if(event.target.value) {
                this.setState({city: event.target.value});
            }else{
                this.setState({city: ''});
            }
        } if(event.target.name == 'ninja_forms_field_32') {
            if(event.target.value) {
                this.setState({message: event.target.value});
            }else{
                this.setState({message: ''});
            }
        } if(event.target.name == 'ninja_forms_field_48') {
            if(event.target.value) {
                this.setState({confirmValue: event.target.value});
            }else{
                this.setState({confirmValue: ''});
            }
        }
        console.log(this.state);
    }

    handleFormSubmit(e) {
        if(this.state.name && this.state.email && this.state.country &&  this.state.confirmValue &&  this.state.message) {
            var options = {
                method: 'POST',
                url: 'http://34.227.13.186:3001/send_mail',
                headers: {

                    'content-type': 'application/json'
                },
                body: {
                    'existing': this.state.existing,
                    'customerType': this.state.customerType,
                    'full_name': this.state.name,
                    'email': this.state.email,
                    'phone': this.state.phone,
                    'country': this.state.country,
                    'city': this.state.city,
                    'message': this.state.message,
                    'confirmValue': this.state.confirmValue
                },
                json: true
            };
            request(options).then(data=>this.setState({
                    existing: false,
                    customerType: '',
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    city: '',
                    message: '',
                    confirmValue: '',
                    error:false,
                    success:true
                })
            );
        }
        else{
            this.setState({error: true});
        }

    }


    componentDidMount() {
        this.setState({
            existing:false,
            customerType: '',
            name: '',
            email:'',
            phone: '',
            country: '',
            city:'',
            message: '',
            confirmValue: '',
            error:false,
            success:false
        });
    }

    render() {
        let {existing,customerType,name,email,phone,country,city,message,confirmValue,error,success} = this.state;

        var style1 ={
            width: '260px',
            display: 'none'
        }, widthFull = {width: '100%'},show={visibility: 'visible !important', opacity: '1'},red={color:'red'},green={color:'green'};


        return <div>
            <div className="tw-slide-panel dark nb-menu-level tw-left" id="nb-popoutmenu"
                 style={style1}>

                <div className="above-nav">
                    <div id="search-3" className="widget widget_search">
                        <div className="search-form search">
                            <form method="get" name="SearchForm" action="http://xseededucation.com/">
                                <fieldset>
                                    <input type="text" name="s" id="s" placeholder="Search..."/>
                                </fieldset>
                            </form>
                            <i className="fa fa-search searchbutton"></i>
                        </div>
                        </div>
                    <div className="clear"></div>
                </div>

                <nav id="">
                    <ul className="nb-menu-items-container">

                        <div className="menuTR">
                            <li
                                className="home-side menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1301 current_page_item menu-item-2121 show-mobile">
                                <a href="http://xseededucation.com/">Home</a></li>
                            <li className="buyXseed menu-item menu-item-type-custom menu-item-object-custom menu-item-1827 show-mobile">
                                <a
                                    href="http://xseededucation.com/get-in-touch-with-xseed">Buy XSEED</a></li>
                            <li className="hiring menu-item menu-item-type-custom menu-item-object-custom menu-item-1362 show-mobile">
                                <a
                                    href="http://xseededucation.com/careers-at-xseed/">Work At XSEED</a></li>

                        </div>
                        <li id="menu-item-1558"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1558"><a
                            href="http://xseededucation.com/about-us/">About Us</a></li>
                        <li id="menu-item-1786"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1786"><a
                            href="http://xseededucation.com/careers-at-xseed/">Careers</a></li>
                        <li id="menu-item-1798"
                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1798"><a
                            href="http://xseededucation.com/category/news-events/">News &amp; Events</a></li>

                    </ul>
                </nav>

                <div className="below-nav"></div>


            </div>
            <div className="pace  pace-inactive">
                <div className="pace-progress" data-progress-text="100%" data-progress="99" style={widthFull}>
                    <div className="pace-progress-inner"></div>
                </div>
                <div className="pace-activity"></div>
            </div>
            <div className="loading ajax-loader bars"></div>
            <div className="top-nav nb-fixed">
                <div className="top-nav-inner">
                    <div className="table">
                        <div className="tr">
                            <div id="hideLandingHome">
                                <div className="td verticalmiddle" id="nav-menu-icon">

                                    <a href="#" className="tw-menu-icon nb-menu-link" id="nb-menu-link">
							<span>
								Menu							</span>
                                    </a>



                                </div>



                                <div className="td verticalmiddle" id="logo">


                                    <h1>

                                        <a href="http://xseededucation.com/">

                                            <img
                                                src="http://xseededucation.com/wp-content/uploads/2015/04/logo-small-black.png"
                                                className="dark-logo"
                                                alt="XSEED Education" />
                                            <img
                                                src="http://xseededucation.com/wp-content/uploads/2015/04/logo-small-white.png"
                                                className="light-logo"
                                                alt="XSEED Education" />

                                        </a>


                                    </h1></div>

                            </div>
                            <div id="showLandingHome">


                                <div className="td verticalmiddle" id="nav-menu-icon">


                                    <a href="#" className="tw-menu-icon nb-menu-link" id="nb-menu-link">
							<span>
								Menu							</span>
                                    </a>



                                </div>
                                <div className="td verticalmiddle" id="logo">


                                    <h1>

                                        <a href="http://xseededucation.com/">

                                            <img src="http://xseededucation.com/wp-content/uploads/2015/04/logo.png"
                                                 className="dark-alternate"
                                                 alt="Xseed" />


                                        </a>


                                    </h1></div>



                            </div>


                            <div className="td verticalmiddle">
                                <div className="navcontainer">

                                    <nav id="top-menu">

                                        <ul id="menu-top-menu-right"
                                            className="sf-menu show-desktop sf-js-enabled sf-arrows">
                                            <li id="menu-item-2121"
                                                className="home-side menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1301 current_page_item menu-item-2121">
                                                <a href="http://xseededucation.com/">Home</a></li>
                                            <li id="menu-item-1827"
                                                className="buyXseed menu-item menu-item-type-custom menu-item-object-custom menu-item-1827">
                                                <a
                                                    href="http://xseededucation.com/get-in-touch-with-xseed">Buy
                                                    XSEED</a></li>
                                            <li id="menu-item-1362"
                                                className="hiring menu-item menu-item-type-custom menu-item-object-custom menu-item-1362">
                                                <a
                                                    href="http://xseededucation.com/careers-at-xseed/">Work At XSEED</a>
                                            </li>
                                        </ul>
                                        <div className="clear"></div>
                                    </nav>

                                    <div className="clear"></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div id="nb-menu-page">
                <div id="sitecontainer">
                    <div id="fullpager-wrapper">
                        <div id="fullpager" className="scrolling-auto  animations-on fullpager-show fullpager-wrapper">
                            <section id="section-1"
                                     className="section text-image-section section-1 layout-left has-image vertical-bottom fp-section active fp-table"
                                     data-section="1" data-title="">

                                <div className="slimScrollDiv">
                                    <div className="fp-scrollable">


                                        <div className="container">
                                            <div className="section-entry table">
                                                <div className="text-image-wrapper tr">

                                                    <div className="col-lg-6 col-md-6 text-cell td verticaltop">

                                                        <div className="text-layout-inner">


                                                            <div className="v-item title" style={show}>
                                                                <h2>THE UNAFRAID CHILD<br />
                                                                    <span className="redSpan">will compete in the 21st century</span>
                                                                </h2>
                                                            </div>
                                                            <div className="v-item content" style={show}>
                                                                <p className="leadPara"><span className="hide991">XSEED is a proven and research based academic program for schools that builds thinking skills &amp;
                                                                    problem solving confidence in children.</span>
                                                                    XSEED children ask more questions, can write in
                                                                    their own words, like doing word problems
                                                                    in mathematics, can complete their homework on their
                                                                    own, are not afraid to speak-up in
                                                                    English, persist longer in solving problems, and
                                                                    score well on tests.</p>
                                                            </div>


                                                        </div>

                                                        <div className="clear"></div>

                                                    </div>

                                                    <div
                                                        className="col-lg-6 col-md-6 fit-this-image td image-cell verticalbottom">

                                                        <div id="sec1Image" className="image-container full-h-w-i-b v-item wp-caption" style={show}>


                                                            <div className="section-buttons v-item" style={show}>
                                                                <a
                                                                    href="https://www.youtube.com/watch?v=5LOze3VfUMQ?rel=0&amp;controls=0&amp;showinfo=0"
                                                                    className="play no-ajaxy themewich-lightbox tiny-details button-1"
                                                                    title="Play Video"><span
                                                                    className="play-button has-text"></span>Play Video</a>
                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <a href="#section-2" className="nextbutton nobg scroll-animate next-section-link ">
            <span>
                Next Section            </span>
                                        </a>

                                    </div>
                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </section>
                            <section id="section-2"
                                     className="section text-image-section section-2 layout-left has-image vertical-bottom fp-section fp-table"
                                     data-section="2" data-title="">
                                <div className="slimScrollDiv">
                                    <div className="fp-scrollable">


                                        <div className="container">
                                            <div className="section-entry table">
                                                <div className="text-image-wrapper tr">

                                                    <div className="col-lg-6 col-md-6 text-cell td verticaltop">

                                                        <div className="text-layout-inner">


                                                            <div className="v-item title" style={show}>
                                                                <h2>A LEARNING classNameROOM<br />
                                                                    <span
                                                                        className="redSpan">the 5-step teaching method</span>
                                                                </h2>
                                                            </div>
                                                            <div className="v-item content">
                                                                <div className="five-step-wrap"><img
                                                                    className="five-step-img normal alignnone size-full wp-image-2110"
                                                                    src="http://xseededucation.com/wp-content/uploads/2015/01/378x300x5_step_red_black.jpg.pagespeed.ic.tXlIvYBRuL.webp"
                                                                    alt="5_step_red_black" width="378" height="300" />
                                                                </div>
                                                                <p className="leadPara">XSEED teachers begin a className by
                                                                    clearly stating the learning goal, ask
                                                                    children what they know already, demonstrate an
                                                                    experiment or conduct a group activity,
                                                                    let children speak before they do, ensure the
                                                                    “application questions” are done
                                                                    independently, fiercely believe in practice, assess
                                                                    daily, and support each child
                                                                    individually.</p>
                                                            </div>
                                                            <div id="homeSlider2"
                                                                 className="v-item content owl-carousel owl-theme" style={show}>
                                                                <div className="owl-item">
                                                                    <div className="item">
                                                                        <div className="v-item subtitle2 tiny-details" style={show}>
                                                                            <span className="number">01</span> <span
                                                                            className="divider">/</span> Step 1
                                                                        </div>
                                                                        <div className="v-item content">
                                                                            <img
                                                                                className="normal size-full wp-image-1840 alignnone"
                                                                                src="http://xseededucation.com/wp-content/uploads/2015/01/99x99xaim.png.pagespeed.ic.Ds0V_Q66mR.png"
                                                                                alt="aim" width="99" height="99" />
                                                                            <h4 className="stepTitle5">AIM</h4>
                                                                            <p>Clarify the outcome of every lesson
                                                                                so students know beforehand what
                                                                                they will
                                                                                learn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item">
                                                                    <div className="item">
                                                                        <div className="v-item subtitle2 tiny-details" style={show}>
                                                                            <span className="number">02</span> <span
                                                                            className="divider">/</span> Step 2
                                                                        </div>
                                                                        <div className="v-item content">
                                                                            <img
                                                                                className="normal size-full wp-image-1840 alignnone"
                                                                                src="http://xseededucation.com/wp-content/uploads/2015/01/99x99xaction.png.pagespeed.ic.qmqVqSTkWR.png"
                                                                                alt="aim" width="99" height="99" />
                                                                            <h4 className="stepTitle5">ACTION</h4>
                                                                            <p>Perform an activity to experience
                                                                                concepts first-hand &amp; understand
                                                                                their
                                                                                use and application in real
                                                                                life.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item">
                                                                    <div className="item">
                                                                        <div className="v-item subtitle2 tiny-details" style={show}>
                                                                            <span className="number">03</span> <span
                                                                            className="divider">/</span> Step 3
                                                                        </div>
                                                                        <div className="v-item content">
                                                                            <img
                                                                                className="normal size-full wp-image-1840 alignnone"
                                                                                src="http://xseededucation.com/wp-content/uploads/2015/01/99x99xanalysis.png.pagespeed.ic.BA4yv8ZdrM.png"
                                                                                alt="aim" width="99" height="99" />
                                                                            <h4 className="stepTitle5">ANALYSIS</h4>
                                                                            <p>Reflect on the experience &amp; ask
                                                                                probing questions to uncover and
                                                                                understand
                                                                                the concept further.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item">
                                                                    <div className="item">
                                                                        <div className="v-item subtitle2 tiny-details" style={show}>
                                                                            <span className="number">04</span> <span
                                                                            className="divider">/</span> Step 4
                                                                        </div>
                                                                        <div className="v-item content">
                                                                            <img
                                                                                className="normal size-full wp-image-1840 alignnone"
                                                                                src="http://xseededucation.com/wp-content/uploads/2015/01/99x99xapplication.png.pagespeed.ic.xs2ivWRJSI.png"
                                                                                alt="aim" width="99" height="99" />
                                                                            <h4 className="stepTitle5">APPLICATION</h4>
                                                                            <p>Practice solving real world problems
                                                                                in the workbook to solidify
                                                                                understanding
                                                                                and build skills.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="owl-item">
                                                                    <div className="item">
                                                                        <div className="v-item subtitle2 tiny-details" style={show}>
                                                                            <span className="number">05</span> <span
                                                                            className="divider">/</span> Step 5
                                                                        </div>
                                                                        <div className="v-item content">
                                                                            <img
                                                                                className="normal size-full wp-image-1840 alignnone"
                                                                                src="http://xseededucation.com/wp-content/uploads/2015/01/99x99xassesment.png.pagespeed.ic.bCdMu3G3Rh.png"
                                                                                alt="aim" width="99" height="99" />
                                                                            <h4 className="stepTitle5">ASSESSMENT</h4>
                                                                            <p>Get real-time feedback across
                                                                                conceptual understanding, applied
                                                                                thinking &amp;
                                                                                english language fluency in order to
                                                                                improve performance.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="clear"></div>

                                                    </div>

                                                    <div
                                                        className="col-lg-6 col-md-6 fit-this-image td image-cell verticalbottom">

                                                        <div id="sec2Image" className="image-container full-h-w-i-b v-item wp-caption" style={show}>


                                                            <div className="section-buttons v-item" style={show}><a href=""
                                                                                                             className="link no-ajaxy themewich-lightbox tiny-details button-1"
                                                                                                             title=""></a>
                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <a href="#section-3" className="nextbutton nobg scroll-animate next-section-link ">
            <span>
                Next Section            </span>
                                        </a>

                                    </div>
                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </section>
                            <section id="section-3"
                                     className="section text-image-section section-3 layout-left has-image vertical-bottom fp-section fp-table"
                                     data-section="3" data-title="">
                                <div className="slimScrollDiv">
                                    <div className="fp-scrollable">


                                        <div className="container">
                                            <div className="section-entry table">
                                                <div className="text-image-wrapper tr">

                                                    <div className="col-lg-6 col-md-6 text-cell td verticaltop">

                                                        <div className="text-layout-inner">


                                                            <div className="v-item title" style={show}>
                                                                <h2>A SCHOOL’s REAL<br />
                                                                    ACADEMIC PARTNER<br />
<span className="redSpan">beyond books, boards &amp; promises:<br />
a complete solution</span></h2>
                                                            </div>
                                                            <div className="v-item content">
                                                                <p className="leadPara">In XSEED schools teachers are better
                                                                    resourced and regularly trained,
                                                                    children have application practice workbooks for
                                                                    every subject in addition to textbook,
                                                                    assessment is on skills in addition to concepts, and
                                                                    the school leadership has a highly
                                                                    skilled education coach to consult with.</p>
                                                            </div>


                                                        </div>

                                                        <div className="clear"></div>

                                                    </div>

                                                    <div
                                                        className="col-lg-6 col-md-6 fit-this-image td image-cell verticalbottom">

                                                        <div id="sec3Image" className="image-container full-h-w-i-b v-item wp-caption" style={show}>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <a href="#section-4" className="nextbutton nobg scroll-animate next-section-link ">
            <span>
                Next Section            </span>
                                        </a>

                                    </div>
                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </section>
                            <section id="section-4"
                                     className="section text-image-section section-4 layout-left has-image vertical-bottom fp-section fp-table"
                                     data-section="4" data-title="">
                                <div className="slimScrollDiv">
                                    <div className="fp-scrollable">


                                        <div className="container">
                                            <div className="section-entry table">
                                                <div className="text-image-wrapper tr">

                                                    <div className="col-lg-6 col-md-6 text-cell td verticaltop">

                                                        <div className="text-layout-inner">


                                                            <div id="parentTitle" className="pss current">
                                                                <div className="v-item title" style={show}>
                                                                    <h2>OVER 2 MILLION <span className="none">SATISFIED PARENTS</span>
                                                                        <span
                                                                            className="redSpan">believe in the xseed way</span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div id="studentTitle" className="pss">
                                                                <div className="v-item title" style={show}>
                                                                    <h2>THOUSANDS OF <span className="none">SCHOOL PRINCIPALS</span>
                                                                        <span className="redSpan">swear by the change</span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div id="schoolTitle" className="pss">
                                                                <div className="v-item title" style={show}>
                                                                    <h2>SCHOOL LEADERS<span className="none">ACROSS THE WORLD</span>
                                                                        <span
                                                                            className="redSpan">trust the XSEED system</span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className="tw-tabs-shortcode v-item ui-tabs ui-widget ui-widget-content ui-corner-all" style={show}>
                                                                <div className="TabNav">
                                                                    <ul id="tw-tabs-1"
                                                                        className="tw-tabs  ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                                                                        role="tablist">
                                                                        <li className="ui-state-default ui-corner-top ui-tabs-active ui-state-active"
                                                                            encType                                          tabIndex="0"
                                                                            role="tab"
                                                                            aria-controls="tw-tab-content-1-1"
                                                                            aria-labelledby="ui-id-1"
                                                                            aria-selected="true" aria-expanded="true"><a
                                                                            id="ui-id-1" className="ui-tabs-anchor"
                                                                            tabIndex="-1"
                                                                            href="#tw-tab-content-1-1"
                                                                            role="presentation"><img
                                                                            src="http://xseededucation.com/wp-content/uploads/2015/01/xparents.png.pagespeed.ic.jH-_3ILBF3.png"
                                                                            alt="parents" />Parents</a></li>
                                                                        <li className="ui-state-default ui-corner-top"
                                                                            tabIndex="-1" role="tab"
                                                                            aria-controls="tw-tab-content-2-1"
                                                                            aria-labelledby="ui-id-2"
                                                                            aria-selected="false"
                                                                            aria-expanded="false"><a id="ui-id-2"
                                                                                                     className="ui-tabs-anchor"
                                                                                                     tabIndex="-1"
                                                                                                     href="#tw-tab-content-2-1"
                                                                                                     role="presentation"><img
                                                                            src="http://xseededucation.com/wp-content/uploads/2015/01/xstudents.png.pagespeed.ic.g1zwVC_Uwu.png"
                                                                            alt="Principals" />Principals </a></li>
                                                                        <li className="ui-state-default ui-corner-top"
                                                                            tabIndex="-1" role="tab"
                                                                            aria-controls="tw-tab-content-3-1"
                                                                            aria-labelledby="ui-id-3"
                                                                            aria-selected="false"
                                                                            aria-expanded="false"><a id="ui-id-3"
                                                                                                     className="ui-tabs-anchor"
                                                                                                     tabIndex="-1"
                                                                                                     href="#tw-tab-content-3-1"
                                                                                                     role="presentation"><img
                                                                            src="http://xseededucation.com/wp-content/uploads/2015/01/xschools.png.pagespeed.ic.rkjmKQouj3.png"
                                                                            alt="schools" />Schools</a></li>
                                                                    </ul>
                                                                    <div className="clear"></div>
                                                                </div>
                                                                <div className="tabCON">
                                                                    <div id="tw-tab-content-1-1"
                                                                         className="tw-tab-1 tw-tab-content  ui-tabs-panel ui-widget-content ui-corner-bottom"
                                                                         aria-labelledby="ui-id-1" role="tabpanel"
                                                                         aria-hidden="false">
                                                                        <div
                                                                            className="tw-column tw-one-half tw-column-first ">
                                                                            Our son has become more active and
                                                                            inclined to learn things and ask questions
                                                                            which kids his age would not even think of!
                                                                            <h6 className="qname">Vajid Khan, Parent</h6>
                                                                        </div>
                                                                        <div
                                                                            className="tw-column tw-one-half tw-column-last hide991 ">
                                                                            <p>My child seems to understand concepts and
                                                                                learn faster using XSEED books /
                                                                                material
                                                                                as compared to non-XSEED books.</p>
                                                                            <h6 className="qname">R. Shantaram, Parent</h6>
                                                                            <p>The XSEED method increased creativity,
                                                                                presence of mind and analysis capacity
                                                                                of my
                                                                                son.</p>
                                                                            <h6 className="qname">Manjula Kannapiran,
                                                                                Parent</h6>
                                                                        </div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <div id="tw-tab-content-2-1"
                                                                         className="tw-tab-1 tw-tab-content  ui-tabs-panel ui-widget-content ui-corner-bottom"

                                                                         aria-labelledby="ui-id-2" role="tabpanel"
                                                                         aria-hidden="true">
                                                                        <div
                                                                            className="tw-column tw-one-half tw-column-first ">
                                                                            XSEED makes teachers better equipped
                                                                            for the classNameroom. The response of the
                                                                            learners is immense and the level of
                                                                            curiosity
                                                                            through experiential learning reaches
                                                                            greater heights.
                                                                            <h6 className="qname">Principal, TIM,
                                                                                Chennai</h6>
                                                                        </div>
                                                                        <div
                                                                            className="tw-column tw-one-half tw-column-last hide991">
                                                                            <p>XSEED has made our children think and
                                                                                write on their own. classNameroom teaching
                                                                                has
                                                                                become uniform across all grades.</p>
                                                                            <h6 className="qname">English HOD, Sarala Birla
                                                                                Academy, Bengaluru</h6>
                                                                            <p>The XSEED curriculum provides a hands-on
                                                                                approach to students, ensures
                                                                                opportunities for creative expression
                                                                                and develop skills of reflective
                                                                                thinking,
                                                                                observation &amp; experimentation.</p>
                                                                            <h6 className="qname">Principal, MSMV,
                                                                                Jaipur</h6>
                                                                        </div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <div id="tw-tab-content-3-1"
                                                                         className="tw-tab-1 tw-tab-content  ui-tabs-panel ui-widget-content ui-corner-bottom"
                                                                         aria-labelledby="ui-id-3" role="tabpanel"
                                                                         aria-hidden="true">
                                                                        <div
                                                                            className="tw-column tw-one-half tw-column-first ">
                                                                            “The introduction of XSEED has
                                                                            certainly brought the child to the
                                                                            centre-stage of learning. The className has
                                                                            become a
                                                                            place of experimentation. A truly rewarding
                                                                            experience!
                                                                            <h6 className="qname">Management, Vel’s
                                                                                Vidyasharam, Chennai</h6>
                                                                        </div>
                                                                        <div
                                                                            className="tw-column tw-one-half tw-column-last hide991 ">
                                                                            <p>XSEED has not only improved the skills of
                                                                                our children, but has helped our
                                                                                teachers
                                                                                plan &amp; execute syllabus really
                                                                                well.</p>
                                                                            <h6 className="qname">Chairman, Credence High
                                                                                School, Dubai</h6>
                                                                            <p>XSEED is a wonderful curriculum for
                                                                                children of all ages since it caters to
                                                                                all
                                                                                types of learners.</p>
                                                                            <h6 className="qname">Administrator, BeanStalk,
                                                                                Nagaland</h6>
                                                                        </div>
                                                                        <div className="clear"></div>
                                                                    </div>
                                                                    <div className="clear"></div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                        <div className="clear"></div>

                                                    </div>

                                                    <div
                                                        className="col-lg-6 col-md-6 fit-this-image td image-cell verticalbottom">

                                                        <div id="sec4Image" className="image-container full-h-w-i-b v-item wp-caption" style={show}>


                                                            <div className="section-buttons v-item" style={show} ><a href=""
                                                                                                             className="last-section link no-ajaxy themewich-lightbox tiny-details button-1"
                                                                                                             title=""></a>
                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <a href="#section-5"
                                           className="nextbutton nobg scroll-animate next-section-link last-section">
            <span>
                Next Section            </span>
                                        </a>

                                    </div>
                                    <div className="slimScrollBar"></div>
                                    <div className="slimScrollRail"></div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="page-align-left left-title  page-content-wrapper no-sections template-grid no-filters post-1301 page type-page status-publish hentry">


                        <div className="image-title-bg ">


                            <div className="overlay"></div>


                            <div className="col-md-8 title-container ">
                                <div className="title v-item" style={show}>


                                    <h2>Featured <span>Events</span> <span className="titlered">From our blog</span></h2>
                                </div>
                                <hr className="v-item title-divider" data-width="100px" style={show} />

                                <p className="v-item leadPara" style={show}>
                                    XSEED leads from the front in the widespread pursuit of a better, more effective
                                    approach to education.
                                    Every year, XSEED hosts several national and global events to forward the cause
                                    of better learning,
                                    effective teaching &amp; all round improvement in the education systems across
                                    the world. </p>


                            </div>

                        </div>


                        <div className="page-content-inner">


                            <div className="isotope-wrapper v-item" style={show}>
                                <div className="container">
                                    <div className="col-md-12">

                                    </div>
                                </div>



                                <div className="container">
                                    <div className="isotopecontainer struckcontainer">



                                        <div className="type-post grid isobrick hasimages col-xs-12 col-sm-6 col-md-3 post-11533 post status-publish format-standard has-post-thumbnail hentry category-news-events">
                                            <a href="http://xseededucation.com/xseed-releases-25-stories-of-school-transformation/"
                                               className="postlink">

                                                <div className="GimageCon" id="GimageCon1" ></div>
                                                <div className="overlay"></div>


                                                <div className="title">

                                                    <div className="date tiny-details">
                                                        6 months ago
                                                    </div>

                                                    <h2>
				<span>
					XSEED RELEASES 25 STORIES OF SCHOOL TRANSFORMATION				</span>
                                                    </h2>

                                                </div>


                                            </a>
                                        </div>
                                        <div
                                            className="type-post grid isobrick hasimages col-xs-12 col-sm-6 col-md-3 post-10063 post status-publish format-standard has-post-thumbnail hentry category-news-events">
                                            <a href="http://xseededucation.com/xseed-raises-funding-to-reach-10m-children/"
                                               className="postlink">

                                                <div className="GimageCon" id="GimageCon2"></div>
                                                <div className="overlay"></div>

                                                <div className="title">

                                                    <div className="date tiny-details">
                                                        7 months ago
                                                    </div>

                                                    <h2>
				<span>
					XSEED Raises Funding to Reach 10M Children				</span>
                                                    </h2>

                                                </div>


                                            </a>
                                        </div>

                                        <div
                                            className="type-post grid isobrick hasimages col-xs-12 col-sm-6 col-md-3 post-8468 post status-publish format-standard has-post-thumbnail hentry category-news-events">
                                            <a href="http://xseededucation.com/sot/" className="postlink">

                                                <div className="GimageCon" id="GimageCon3"></div>
                                                <div className="overlay"></div>


                                                <div className="title">

                                                    <div className="date tiny-details">
                                                        10 months ago
                                                    </div>

                                                    <h2>
				<span>
					XSEED School of Tomorrow Conference Manila 2016 &#8203;				</span>
                                                    </h2>

                                                </div>


                                            </a>
                                        </div>

                                        <div
                                            className="type-post grid isobrick hasimages col-xs-12 col-sm-6 col-md-3 post-7632 post status-publish format-standard has-post-thumbnail hentry category-news-events">
                                            <a href="http://xseededucation.com/announcing-xseed-school-of-tomorrow-conference-2016-%e2%80%8b/"
                                               className="postlink">

                                                <div className="GimageCon" id="GimageCon4"></div>
                                                <div className="overlay"></div>


                                                <div className="title">

                                                    <div className="date tiny-details">
                                                        12 months ago
                                                    </div>

                                                    <h2>
				<span>
					Announcing XSEED School of Tomorrow Conference 2016 &#8203;				</span>
                                                    </h2>

                                                </div>


                                            </a>
                                        </div>

                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div id="blogMore">
                                    <a href="http://www.beta.xseededucation.com/category/news-events/"><h6>SEE MORE
                                        <span>In our blog</span>
                                    </h6></a>
                                </div>

                                <div className="infinite-pagination" data-max="3" data-current="1">
                                    <h3 className="more-posts tiny-details" data-next-page="2">
                                        <a href="http://xseededucation.com/page/2/">Load More <span
                                            className="more-plus">+</span></a></h3>
                                    <div className="clear"></div>
                                </div>


                            </div>

                        </div>


                    </div>


                    <div className="clear"></div>



                    <div id="footer">


                        <div className="container clearfix">

                            <div className="footerForm">

                                <div className="col-sm-6">
                                    <h4 className="underline">Locations</h4>
                                    <div className="formLocation">
                                        <div className="tw-column tw-one-third tw-column-first ">
                                            <h3><i className="fa fa-map-marker"></i>
                                                Singapore</h3>
                                            <h5>4 Battery Road, Bank of China Building</h5>
                                        </div>
                                        <div className="tw-column tw-one-third  ">
                                            <h3><i className="fa fa-map-marker"></i>
                                                Bangalore</h3>
                                            <h5>415, RT Nagar</h5>
                                        </div>
                                        <div className="tw-column tw-one-third tw-column-last ">
                                            <h3><i className="fa fa-map-marker"></i>
                                                Gurgaon Dev Center</h3>
                                            <h5>Emerald Court, Sec 29</h5>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <h4>Contact Us</h4>
                                    {success >= 1 && <h6 style={green}>Thanks for the subscribing to us. Someone from our team will contact you shortly!</h6>}
                                    {error >= 1 && <h6 style={red}>Please fill in the correct required details.</h6>}
                                    <div id="ninja_forms_form_9_cont" className="ninja-forms-cont">
                                        <div id="ninja_forms_form_9_wrap" className="ninja-forms-form-wrap">
                                            <div id="ninja_forms_form_9_response_msg"
                                                 className="ninja-forms-response-msg "></div>
                                            <form id="ninja_forms_form_9" encType="multipart/form-data" onSubmit={this.handleFormSubmit} name="" className="ninja-forms-form">
                                                <div id="ninja_forms_htmlForm_9_all_fields_wrap" className="ninja-htmlForms-all-fields-wrap">
                                                            <div className="ninja-htmlForms-required-items">Fields marked with an <span
                                                                className="ninja-htmlForms-req-symbol">*</span> are required
                                                            </div>
                                                            <div className="field-wrap checkbox-wrap label-left" id="ninja_forms_field_35_div_wrap"
                                                                 data-visible="1">

                                                                    <label htmlFor="ninja_forms_field_35" id="ninja_forms_field_35_label" className="">Existing XSEED
                                                                        customer </label>
                                                                <input id="ninja_forms_field_35" name="ninja_forms_field_35" type="checkbox" checked={this.state.existing} onChange={this.handleChange} className="ninja-htmlForms-field "  rel="35" />

                                                            </div>
                                                            <div className="field-wrap list-radio-wrap label-left" id="ninja_forms_field_50_div_wrap"
                                                                 data-visible="1">
                                                                        <label htmlFor="ninja_forms_field_50" id="ninja_forms_field_50_label" className="">You are: </label>
                                                                        <span id="ninja_forms_field_50_options_span" className="" rel="50"><ul><li><label
                                                                            id="ninja_forms_field_50_0_label" className="ninja-htmlForms-field-50-options"
                                                                            htmlFor="ninja_forms_field_50_0">
                                                                <input id="ninja_forms_field_50_0" name="ninja_forms_field_50" type="radio" value="Parent" onChange={this.handleChange} className="ninja-htmlForms-field  ninja-htmlForms-field-conditional-listen "  checked="" rel="50" />
                                                                Parent</label></li><li><label
                                                                            id="ninja_forms_field_50_1_label" className="ninja-htmlForms-field-50-options"
                                                                            htmlFor="ninja_forms_field_50_1">
                                                                <input id="ninja_forms_field_50_1" name="ninja_forms_field_50" type="radio"  value="School" onChange={this.handleChange} className="ninja-htmlForms-field  ninja-htmlForms-field-conditional-listen "  rel="50" />School</label></li><li><label
                                                                            id="ninja_forms_field_50_2_label" className="ninja-htmlForms-field-50-options"
                                                                            htmlFor="ninja_forms_field_50_2">
                                                                <input id="ninja_forms_field_50_2" name="ninja_forms_field_50" type="radio"  value="Looking to Work at XSEED" onChange={this.handleChange} className="ninja-htmlForms-field  ninja-htmlForms-field-conditional-listen "  rel="50" />Looking to Work&#8203; at XSEED</label></li><li><label
                                                                            id="ninja_forms_field_50_3_label" className="ninja-htmlForms-field-50-options"
                                                                            htmlFor="ninja_forms_field_50_3">
                                                                <input id="ninja_forms_field_50_3" name="ninja_forms_field_50" type="radio"  value="Other" onChange={this.handleChange} className="ninja-htmlForms-field  ninja-htmlForms-field-conditional-listen " rel="50" />Other</label></li></ul></span>
                                                            </div>
                                                            <div className="field-wrap text-wrap label-inside" id="ninja_forms_field_24_div_wrap" data-visible="1">
                                                                    <input id="ninja_forms_field_24" data-mask="" data-input-limit=""  value={this.state.name} onChange={this.handleChange} data-input-limit-type="char" data-input-limit-msg="" name="ninja_forms_field_24" type="text" placeholder="Full Name*" className="ninja-htmlForms-field  ninja-htmlForms-req "  rel="24" />


                                                            </div>
                                                            <div className="field-wrap text-wrap label-inside" id="ninja_forms_field_26_div_wrap" data-visible="1">

                                                                    <input id="ninja_forms_field_26" data-mask="" data-input-limit=""  value={this.state.email} onChange={this.handleChange} data-input-limit-type="char" data-input-limit-msg="" name="ninja_forms_field_26" type="text" placeholder="Email*" className="ninja-htmlForms-field  ninja-htmlForms-req email "  rel="26" />


                                                            </div>
                                                            <div className="field-wrap text-wrap label-inside" id="ninja_forms_field_36_div_wrap" data-visible="1">

                                                                    <input id="ninja_forms_field_36" data-mask="9999-999-999" value={this.state.phone} onChange={this.handleChange} data-input-limit="" data-input-limit-type="char" data-input-limit-msg="" name="ninja_forms_field_36" type="text" placeholder="Phone" className="ninja-htmlForms-field  ninja-htmlForms-req ninja-htmlForms-mask"  rel="36" autoComplete="off" />


                                                            </div>
                                                            <div className="field-wrap country-wrap label-above" id="ninja_forms_field_53_div_wrap"
                                                                 data-visible="1">

                                                                    <label htmlFor="ninja_forms_field_53" id="ninja_forms_field_53_label" className="">Country </label>


                                                                        <select name="ninja_forms_field_53" id="ninja_forms_field_53" rel="53"
                                                                                className="ninja-htmlForms-field  address country" value={this.state.country} onChange={this.handleChange}>
                                                                            <option defaultValue="AF">Afghanistan</option>
                                                                            <option defaultValue="AL">Albania</option>
                                                                            <option defaultValue="DZ">Algeria</option>
                                                                            <option defaultValue="AS">American Samoa</option>
                                                                            <option defaultValue="AD">Andorra</option>
                                                                            <option defaultValue="AO">Angola</option>
                                                                            <option defaultValue="AI">Anguilla</option>
                                                                            <option defaultValue="AQ">Antarctica</option>
                                                                            <option defaultValue="AG">Antigua And Barbuda</option>
                                                                            <option defaultValue="AR">Argentina</option>
                                                                            <option defaultValue="AM">Armenia</option>
                                                                            <option defaultValue="AW">Aruba</option>
                                                                            <option defaultValue="AU">Australia</option>
                                                                            <option defaultValue="AT">Austria</option>
                                                                            <option defaultValue="AZ">Azerbaijan</option>
                                                                            <option defaultValue="BS">Bahamas</option>
                                                                            <option defaultValue="BH">Bahrain</option>
                                                                            <option defaultValue="BD">Bangladesh</option>
                                                                            <option defaultValue="BB">Barbados</option>
                                                                            <option defaultValue="BY">Belarus</option>
                                                                            <option defaultValue="BE">Belgium</option>
                                                                            <option defaultValue="BZ">Belize</option>
                                                                            <option defaultValue="BJ">Benin</option>
                                                                            <option defaultValue="BM">Bermuda</option>
                                                                            <option defaultValue="BT">Bhutan</option>
                                                                            <option defaultValue="BO">Bolivia</option>
                                                                            <option defaultValue="BA">Bosnia And Herzegowina</option>
                                                                            <option defaultValue="BW">Botswana</option>
                                                                            <option defaultValue="BV">Bouvet Island</option>
                                                                            <option defaultValue="BR">Brazil</option>
                                                                            <option defaultValue="IO">British Indian Ocean Territory</option>
                                                                            <option defaultValue="BN">Brunei Darussalam</option>
                                                                            <option defaultValue="BG">Bulgaria</option>
                                                                            <option defaultValue="BF">Burkina Faso</option>
                                                                            <option defaultValue="BI">Burundi</option>
                                                                            <option defaultValue="KH">Cambodia</option>
                                                                            <option defaultValue="CM">Cameroon</option>
                                                                            <option defaultValue="CA">Canada</option>
                                                                            <option defaultValue="CV">Cape Verde</option>
                                                                            <option defaultValue="KY">Cayman Islands</option>
                                                                            <option defaultValue="CF">Central African Republic</option>
                                                                            <option defaultValue="TD">Chad</option>
                                                                            <option defaultValue="CL">Chile</option>
                                                                            <option defaultValue="CN">China</option>
                                                                            <option defaultValue="CX">Christmas Island</option>
                                                                            <option defaultValue="CC">Cocos (Keeling) Islands</option>
                                                                            <option defaultValue="CO">Colombia</option>
                                                                            <option defaultValue="KM">Comoros</option>
                                                                            <option defaultValue="CG">Congo</option>
                                                                            <option defaultValue="CD">Congo, The Democratic Republic Of The</option>
                                                                            <option defaultValue="CK">Cook Islands</option>
                                                                            <option defaultValue="CR">Costa Rica</option>
                                                                            <option defaultValue="CI">Cote D'Ivoire</option>
                                                                            <option defaultValue="HR">Croatia (Local Name: Hrvatska)</option>
                                                                            <option defaultValue="CU">Cuba</option>
                                                                            <option defaultValue="CY">Cyprus</option>
                                                                            <option defaultValue="CZ">Czech Republic</option>
                                                                            <option defaultValue="DK">Denmark</option>
                                                                            <option defaultValue="DJ">Djibouti</option>
                                                                            <option defaultValue="DM">Dominica</option>
                                                                            <option defaultValue="DO">Dominican Republic</option>
                                                                            <option defaultValue="TL">Timor-Leste (East Timor)</option>
                                                                            <option defaultValue="EC">Ecuador</option>
                                                                            <option defaultValue="EG">Egypt</option>
                                                                            <option defaultValue="SV">El Salvador</option>
                                                                            <option defaultValue="GQ">Equatorial Guinea</option>
                                                                            <option defaultValue="ER">Eritrea</option>
                                                                            <option defaultValue="EE">Estonia</option>
                                                                            <option defaultValue="ET">Ethiopia</option>
                                                                            <option defaultValue="FK">Falkland Islands (Malvinas)</option>
                                                                            <option defaultValue="FO">Faroe Islands</option>
                                                                            <option defaultValue="FJ">Fiji</option>
                                                                            <option defaultValue="FI">Finland</option>
                                                                            <option defaultValue="FR">France</option>
                                                                            <option defaultValue="FX">France, Metropolitan</option>
                                                                            <option defaultValue="GF">French Guiana</option>
                                                                            <option defaultValue="PF">French Polynesia</option>
                                                                            <option defaultValue="TF">French Southern Territories</option>
                                                                            <option defaultValue="GA">Gabon</option>
                                                                            <option defaultValue="GM">Gambia</option>
                                                                            <option defaultValue="GE">Georgia</option>
                                                                            <option defaultValue="DE">Germany</option>
                                                                            <option defaultValue="GH">Ghana</option>
                                                                            <option defaultValue="GI">Gibraltar</option>
                                                                            <option defaultValue="GR">Greece</option>
                                                                            <option defaultValue="GL">Greenland</option>
                                                                            <option defaultValue="GD">Grenada</option>
                                                                            <option defaultValue="GP">Guadeloupe</option>
                                                                            <option defaultValue="GU">Guam</option>
                                                                            <option defaultValue="GT">Guatemala</option>
                                                                            <option defaultValue="GN">Guinea</option>
                                                                            <option defaultValue="GW">Guinea-Bissau</option>
                                                                            <option defaultValue="GY">Guyana</option>
                                                                            <option defaultValue="HT">Haiti</option>
                                                                            <option defaultValue="HM">Heard And Mc Donald Islands</option>
                                                                            <option defaultValue="VA">Holy See (Vatican City State)</option>
                                                                            <option defaultValue="HN">Honduras</option>
                                                                            <option defaultValue="HK">Hong Kong</option>
                                                                            <option defaultValue="HU">Hungary</option>
                                                                            <option defaultValue="IS">Iceland</option>
                                                                            <option defaultValue="IN" selected="selected">India</option>
                                                                            <option defaultValue="ID">Indonesia</option>
                                                                            <option defaultValue="IR">Iran (Islamic Republic Of)</option>
                                                                            <option defaultValue="IQ">Iraq</option>
                                                                            <option defaultValue="IE">Ireland</option>
                                                                            <option defaultValue="IL">Israel</option>
                                                                            <option defaultValue="IT">Italy</option>
                                                                            <option defaultValue="JM">Jamaica</option>
                                                                            <option defaultValue="JP">Japan</option>
                                                                            <option defaultValue="JO">Jordan</option>
                                                                            <option defaultValue="KZ">Kazakhstan</option>
                                                                            <option defaultValue="KE">Kenya</option>
                                                                            <option defaultValue="KI">Kiribati</option>
                                                                            <option defaultValue="KP">Korea, Democratic People's Republic Of</option>
                                                                            <option defaultValue="KR">Korea, Republic Of</option>
                                                                            <option defaultValue="KW">Kuwait</option>
                                                                            <option defaultValue="KG">Kyrgyzstan</option>
                                                                            <option defaultValue="LA">Lao People's Democratic Republic</option>
                                                                            <option defaultValue="LV">Latvia</option>
                                                                            <option defaultValue="LB">Lebanon</option>
                                                                            <option defaultValue="LS">Lesotho</option>
                                                                            <option defaultValue="LR">Liberia</option>
                                                                            <option defaultValue="LY">Libyan Arab Jamahiriya</option>
                                                                            <option defaultValue="LI">Liechtenstein</option>
                                                                            <option defaultValue="LT">Lithuania</option>
                                                                            <option defaultValue="LU">Luxembourg</option>
                                                                            <option defaultValue="MO">Macau</option>
                                                                            <option defaultValue="MK">Macedonia, htmlFormer Yugoslav Republic Of</option>
                                                                            <option defaultValue="MG">Madagascar</option>
                                                                            <option defaultValue="MW">Malawi</option>
                                                                            <option defaultValue="MY">Malaysia</option>
                                                                            <option defaultValue="MV">Maldives</option>
                                                                            <option defaultValue="ML">Mali</option>
                                                                            <option defaultValue="MT">Malta</option>
                                                                            <option defaultValue="MH">Marshall Islands</option>
                                                                            <option defaultValue="MQ">Martinique</option>
                                                                            <option defaultValue="MR">Mauritania</option>
                                                                            <option defaultValue="MU">Mauritius</option>
                                                                            <option defaultValue="YT">Mayotte</option>
                                                                            <option defaultValue="MX">Mexico</option>
                                                                            <option defaultValue="FM">Micronesia, Federated States Of</option>
                                                                            <option defaultValue="MD">Moldova, Republic Of</option>
                                                                            <option defaultValue="MC">Monaco</option>
                                                                            <option defaultValue="MN">Mongolia</option>
                                                                            <option defaultValue="ME">Montenegro</option>
                                                                            <option defaultValue="MS">Montserrat</option>
                                                                            <option defaultValue="MA">Morocco</option>
                                                                            <option defaultValue="MZ">Mozambique</option>
                                                                            <option defaultValue="MM">Myanmar</option>
                                                                            <option defaultValue="NA">Namibia</option>
                                                                            <option defaultValue="NR">Nauru</option>
                                                                            <option defaultValue="NP">Nepal</option>
                                                                            <option defaultValue="NL">Netherlands</option>
                                                                            <option defaultValue="AN">Netherlands Antilles</option>
                                                                            <option defaultValue="NC">New Caledonia</option>
                                                                            <option defaultValue="NZ">New Zealand</option>
                                                                            <option defaultValue="NI">Nicaragua</option>
                                                                            <option defaultValue="NE">Niger</option>
                                                                            <option defaultValue="NG">Nigeria</option>
                                                                            <option defaultValue="NU">Niue</option>
                                                                            <option defaultValue="NF">Norfolk Island</option>
                                                                            <option defaultValue="MP">Northern Mariana Islands</option>
                                                                            <option defaultValue="NO">Norway</option>
                                                                            <option defaultValue="OM">Oman</option>
                                                                            <option defaultValue="PK">Pakistan</option>
                                                                            <option defaultValue="PW">Palau</option>
                                                                            <option defaultValue="PA">Panama</option>
                                                                            <option defaultValue="PG">Papua New Guinea</option>
                                                                            <option defaultValue="PY">Paraguay</option>
                                                                            <option defaultValue="PE">Peru</option>
                                                                            <option defaultValue="PH">Philippines</option>
                                                                            <option defaultValue="PN">Pitcairn</option>
                                                                            <option defaultValue="PL">Poland</option>
                                                                            <option defaultValue="PT">Portugal</option>
                                                                            <option defaultValue="PR">Puerto Rico</option>
                                                                            <option defaultValue="QA">Qatar</option>
                                                                            <option defaultValue="RE">Reunion</option>
                                                                            <option defaultValue="RO">Romania</option>
                                                                            <option defaultValue="RU">Russian Federation</option>
                                                                            <option defaultValue="RW">Rwanda</option>
                                                                            <option defaultValue="KN">Saint Kitts And Nevis</option>
                                                                            <option defaultValue="LC">Saint Lucia</option>
                                                                            <option defaultValue="VC">Saint Vincent And The Grenadines</option>
                                                                            <option defaultValue="WS">Samoa</option>
                                                                            <option defaultValue="SM">San Marino</option>
                                                                            <option defaultValue="ST">Sao Tome And Principe</option>
                                                                            <option defaultValue="SA">Saudi Arabia</option>
                                                                            <option defaultValue="SN">Senegal</option>
                                                                            <option defaultValue="SR">Serbia</option>
                                                                            <option defaultValue="SC">Seychelles</option>
                                                                            <option defaultValue="SL">Sierra Leone</option>
                                                                            <option defaultValue="SG">Singapore</option>
                                                                            <option defaultValue="SK">Slovakia (Slovak Republic)</option>
                                                                            <option defaultValue="SI">Slovenia</option>
                                                                            <option defaultValue="SB">Solomon Islands</option>
                                                                            <option defaultValue="SO">Somalia</option>
                                                                            <option defaultValue="ZA">South Africa</option>
                                                                            <option defaultValue="GS">South Georgia, South Sandwich Islands</option>
                                                                            <option defaultValue="ES">Spain</option>
                                                                            <option defaultValue="LK">Sri Lanka</option>
                                                                            <option defaultValue="SH">St. Helena</option>
                                                                            <option defaultValue="PM">St. Pierre And Miquelon</option>
                                                                            <option defaultValue="SD">Sudan</option>
                                                                            <option defaultValue="SR">Suriname</option>
                                                                            <option defaultValue="SJ">Svalbard And Jan Mayen Islands</option>
                                                                            <option defaultValue="SZ">Swaziland</option>
                                                                            <option defaultValue="SE">Sweden</option>
                                                                            <option defaultValue="CH">Switzerland</option>
                                                                            <option defaultValue="SY">Syrian Arab Republic</option>
                                                                            <option defaultValue="TW">Taiwan</option>
                                                                            <option defaultValue="TJ">Tajikistan</option>
                                                                            <option defaultValue="TZ">Tanzania, United Republic Of</option>
                                                                            <option defaultValue="TH">Thailand</option>
                                                                            <option defaultValue="TG">Togo</option>
                                                                            <option defaultValue="TK">Tokelau</option>
                                                                            <option defaultValue="TO">Tonga</option>
                                                                            <option defaultValue="TT">Trinidad And Tobago</option>
                                                                            <option defaultValue="TN">Tunisia</option>
                                                                            <option defaultValue="TR">Turkey</option>
                                                                            <option defaultValue="TM">Turkmenistan</option>
                                                                            <option defaultValue="TC">Turks And Caicos Islands</option>
                                                                            <option defaultValue="TV">Tuvalu</option>
                                                                            <option defaultValue="UG">Uganda</option>
                                                                            <option defaultValue="UA">Ukraine</option>
                                                                            <option defaultValue="AE">United Arab Emirates</option>
                                                                            <option defaultValue="GB">United Kingdom</option>
                                                                            <option defaultValue="US">United States</option>
                                                                            <option defaultValue="UM">United States Minor Outlying Islands</option>
                                                                            <option defaultValue="UY">Uruguay</option>
                                                                            <option defaultValue="UZ">Uzbekistan</option>
                                                                            <option defaultValue="VU">Vanuatu</option>
                                                                            <option defaultValue="VE">Venezuela</option>
                                                                            <option defaultValue="VN">Viet Nam</option>
                                                                            <option defaultValue="VG">Virgin Islands (British)</option>
                                                                            <option defaultValue="VI">Virgin Islands (U.S.)</option>
                                                                            <option defaultValue="WF">Wallis And Futuna Islands</option>
                                                                            <option defaultValue="EH">Western Sahara</option>
                                                                            <option defaultValue="YE">Yemen</option>
                                                                            <option defaultValue="YU">Yugoslavia</option>
                                                                            <option defaultValue="ZM">Zambia</option>
                                                                            <option defaultValue="ZW">Zimbabwe</option>
                                                                        </select>


                                                            </div>
                                                            <div className="field-wrap text-wrap label-above" id="ninja_forms_field_55_div_wrap" data-visible="1">

                                                                    <label htmlFor="ninja_forms_field_55" id="ninja_forms_field_55_label" className="">City <span
                                                                        className="ninja-htmlForms-req-symbol"><strong>*</strong></span> </label>
                                                                    <input id="ninja_forms_field_55" data-mask="" value={this.state.city} onChange={this.handleChange} data-input-limit="" data-input-limit-type="char" data-input-limit-msg="character(s) left" name="ninja_forms_field_55" type="text" placeholder="" className="ninja-htmlForms-field  ninja-htmlForms-req "  rel="55" />

                                                            </div>
                                                            <div className="field-wrap textarea-wrap label-inside" id="ninja_forms_field_32_div_wrap" data-visible="1">
                                                                <textarea name="ninja_forms_field_32" id="ninja_forms_field_32" placeholder="Your message here*" className="ninja-htmlForms-field ninja-htmlForms-req" value={this.state.message} onChange={this.handleChange} rel="32" data-input-limit="" data-input-limit-type="char" data-input-limit-msg="character(s) left">Your message here *</textarea>
                                                            </div>
                                                            <div className="field-wrap spam-wrap label-left" id="ninja_forms_field_48_div_wrap" data-visible="1">

                                                                    <label htmlFor="ninja_forms_field_48" id="ninja_forms_field_48_label" className="">What is 2+3? <span
                                                                        className="ninja-htmlForms-req-symbol"><strong>*</strong></span> </label>
                                                                    <input id="ninja_forms_field_48" name="ninja_forms_field_48" value={this.state.confirmValue} onChange={this.handleChange} type="text" className="ninja-htmlForms-field  ninja-htmlForms-req"  rel="48" />

                                                            </div>
                                                            <div className="field-wrap submit-wrap label-above footer-left-submit-wrap" id="ninja_forms_field_29_div_wrap" data-visible="1">

                                                                    <div id="nf_submit">
                                                                        <input type="submit" name="_ninja_forms_field_29" className="ninja-htmlForms-field  footer-left-submit" id="ninja_forms_field_29" defaultValue="Submit" rel="29" />
                                                                    </div>

                                                            </div>
                                                        </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">


                                    <div className="col-sm-6">
                                        <h4 className="underline">Follow Us</h4>
                                        <hr />
                                        <ul className="external-link-list link-column">

                                            <li><a href="http://www.linkedin.com/company/xseededucation"
                                                   target="_blank">LinkedIn</a></li>

                                        </ul>
                                        <ul className="external-link-list link-column">


                                            <li><a href="https://www.youtube.com/user/xseedidiscoveri"
                                                   target="_blank">YouTube</a></li>
                                        </ul>
                                        <br />
                                    </div>
                                    <div className="col-sm-6">
                                        <h4 className="underline">The Fine Print</h4>
                                        <hr />
                                        <ul className="external-link-list">
                                            <li><a href="/privacy-policy" target="_self">Privacy policy</a></li>
                                            <li><a href="/terms" target="_self">Terms of use</a></li>
                                        </ul>
                                        <br />
                                    </div>

                                    <social-buttons data-url="'http://www.xseededucation.com/'"
                                                    data-title="'XSeed Education'"
                                                    className="ng-isolate-scope">
                                        <h4>Share</h4>
                                        <a target="_blank"
                                           className="social-button ng-isolate-scope"
                                           href="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.xseededucation.com"><i
                                            className="fa fa-facebook"></i></a>
                                        <a target="_blank"

                                            className="social-button ng-isolate-scope"
                                            href="http://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.xseededucation.com&amp;text=XSeed%20Education"><i
                                            className="fa fa-twitter"></i></a>
                                        <a target="_blank"
                                           className="social-button ng-isolate-scope"
                                           href="https://plus.google.com/share?url=https%3A%2F%2Fwww.xseededucation.com"><i
                                            className="fa fa-google-plus"></i></a>
                                        <a target="_blank"
                                           className="social-button ng-isolate-scope"
                                           href="mailto:?subject=XSeed%20Education&amp;body=https%3A%2F%2Fwww.xseededucation.com"><i
                                            className="fa fa-envelope"></i></a>
                                    </social-buttons>

                                </div>
                                <div className="clear"></div>

                            </div>


                            <div className="clear"></div>

                            <div className="col-md-6 left-footer tiny-details">
                                © 2017 Xseed, all rights reserved.
                            </div>


                        </div>
                        <div className="clear"></div>


                    </div>



                </div>
            </div>
            <div id="tw-mobile-indicator"></div>
        </div>
    }
}


ReactDOM.render(<ListHolder/>,document.getElementById('root'));
