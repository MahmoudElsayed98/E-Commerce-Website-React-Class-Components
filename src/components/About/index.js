import React, { Component } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="about py-4">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold mt-4 text-center text-uppercase d-flex align-items-center">
            <GoPrimitiveDot size="1.75rem" className="me-2" />
            About Us
            <GoPrimitiveDot size="1.75rem" className="ms-2" />
          </h1>
          <p className="text-center text-md-start mb-0 lead">
            Since 2013, Exclsv has been the best selling and most loved OpenCart
            theme on the market. Now at version 3, it brings many new and
            revolutionary features such as an advanced page builder with 30+
            multi-purpose modules that can be added on any page in any grid
            layout configuration, as well as the best possible customizable
            options for any area of your store. Exclsv has the impressive rating
            of 4.9 from more than 2000 ratings. Exclsv 3 also comes with fully
            customizable CSS options with the added possibility of setting each
            option differently on any breakpoint. This breakthrough feature will
            greatly enhance your design skills and allow you to create pixel
            perfect layouts at any screen width. The new advanced Status
            mechanism allow you to set up modules and menus based on device,
            customer login status or customer groups. 98% satisfaction rate
            within our more than 19,000 customers. The new Schedule feature
            allows you to display any module at specific dates in the future, or
            to disable any module automatically at a certain time and date.
            Imagine the possibilities and peace of mind...designing your
            promotional banners or sliders, or entire product modules that only
            show up on specific dates and are disabled automatically whenever
            you don't need them anymore. These are just a few of the outstanding
            features available in the new exclsv 3 framework, there are so many
            new options and possibilities that it will takes us a very long time
            to list them all.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
