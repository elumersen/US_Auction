import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
export default function App() {
  return (
    <div className="row">
      <div className="col-md-4">
        <MDBCard className="card ml-5 mt-5" style={{ width: "18rem" }}>
          <MDBCardImage
            src="https://online-auction.state.gov/Image/Get?id=8334df7d-dc13-4930-b532-98c0489145ba&size=2"
            position="top"
            alt="..."
            className="card-img-top"
          />
          <MDBCardBody className="card-body text-center">
            <MDBCardTitle>Login to see Bid Status</MDBCardTitle>
            <MDBBtn href="" className="btn btn-primary">
              VIEW THIS LOT
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div className="col-md-6 mt-5">
        <span>
        <MDBTypography tag="h3">
          Printers - AG0232X AG0976B AG0976C AG1000G AG1001G
        </MDBTypography>
        </span>
        <span>
        <MDBBtn className='mx-2' color='secondary'>
        Secondary
      </MDBBtn>
        </span>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <label className="control-label">PHP</label>
              <div className="input-group">
                <span className="input-group-addon left ">
                  <MDBIcon fab icon="php" />{" "}
                </span>
                <div className="form-control input">5,000.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <label className="control-label">Condition</label>
              <div className="input-group">
                <span className="input-group-addon left ">
                  <MDBIcon icon="wrench" />
                </span>
                <div className="form-control input oa-bg-orange">
                  Repairable
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6  hidden-sm">
            <div className="form-group oa-lot-number">
              <label className="control-label">Lot</label>
              <div className="input-group">
                <span className="input-group-addon left ">
                  <MDBIcon icon="tag" />
                </span>
                <div className="form-control input oa-bg-orange" id="2">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <MDBTypography variant="body1">
          6 units of laser printer and 1 Sony DVD drive See Image for reference. No viewing is allowed. All items are sold “AS IS”, “WHERE IS” basis. Working status unknown. No refund, no guarantee, no warranty, no exchange. Please make sure to read and understand the Terms and Condition of Sale and How it works before bidding. Payment must be made by Electronic Funds Transfer within three days of auction closing. All lots must be collected within 5 business days after notification, by email, of receipt of your payment. You must wait to have your payment receipt by email before collecting. Customers are responsible for paying all applicable lo
          </MDBTypography>
        </div>
      </div>
    </div>
  );
}
