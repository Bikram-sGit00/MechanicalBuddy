import "./CustomerRequestCard.css";

import axios from "axios";

import { BsTelephone, BsPatchCheckFill } from "react-icons/bs";

import {
  CheckCircle,
  XCircle,
  MapPinned,
  Clock3,
  AlertTriangle,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const CustomerRequestCard = () => {

  const [customers, setCustomers] =
    useState([]);

  const previousCount =
    useRef(0);

  useEffect(() => {

    const fetchRequests = async () => {

      try {

        const mechanic =
          JSON.parse(
            localStorage.getItem(
              "mechanic"
            )
          );

        if (!mechanic) return;

        const response =
          await axios.get(

            `http://localhost:5000/api/requests/mechanic/${mechanic._id}`

          );

        if (

          response.data.length >

          previousCount.current

        ) {

          setTimeout(() => {

            const ringtone =
              document.getElementById(
                "notification-audio"
              );

            if (ringtone) {

              ringtone.currentTime = 0;

              ringtone.play()
                .catch((err) =>
                  console.log(err)
                );

            }

          }, 500);

        }

        previousCount.current =
          response.data.length;

        setCustomers(
          response.data
        );

      }

      catch (error) {

        console.log(error);

      }

    };

    fetchRequests();

    const interval =
      setInterval(
        fetchRequests,
        3000
      );

    return () =>
      clearInterval(interval);

  }, []);

  const handleAccept = async (
    requestId,
    customer
  ) => {

    try {

      await axios.put(

        `http://localhost:5000/api/requests/accept/${requestId}`

      );

      const ringtone =
        document.getElementById(
          "notification-audio"
        );

      if (ringtone) {

        ringtone.pause();

        ringtone.currentTime = 0;

      }

      localStorage.setItem(

        "selectedCustomer",

        JSON.stringify(customer)

      );

      alert(
        "Request accepted"
      );

      window.location.reload();

    }

    catch (error) {

      console.log(error);

    }

  };

  const handleReject = async (
    requestId
  ) => {

    try {

      await axios.put(

        `http://localhost:5000/api/requests/reject/${requestId}`

      );

      const ringtone =
        document.getElementById(
          "notification-audio"
        );

      if (ringtone) {

        ringtone.pause();

        ringtone.currentTime = 0;

      }

      alert(
        "Request rejected"
      );

      window.location.reload();

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <>

      <audio
        id="notification-audio"
        src="/sounds/notification.mp3"
      />

      <div className="customer-wrapper">

        {

          customers.map(
            (
              customer,
              index
            ) => (

              <div
                key={customer._id}
                className="customer-card"
              >

                <img
                  src={`https://i.pravatar.cc/300?img=${index + 10}`}
                  alt="customer"
                  className="customer-img"
                />

                <div className="customer-content">

                  <div className="customer-top">

                    <div>

                      <h2>

                        {customer.customerName}

                        <BsPatchCheckFill
                          className="verified-icon"
                        />

                      </h2>

                      <p>
                        Customer Request
                      </p>

                    </div>

                    <div className="urgency-badge">

                      <AlertTriangle size={15} />

                      HIGH

                    </div>

                  </div>

                  <div className="customer-info">

                    <div>

                      <MapPinned size={16} />

                      Live Request

                    </div>

                    <div>

                      <Clock3 size={16} />

                      Active Now

                    </div>

                  </div>

                  <div className="issue-box">

                    {customer.issue}

                  </div>

                  <div className="issue-box">

                    Vehicle:
                    {" "}
                    {customer.vehicleNumber}

                  </div>

                  <div className="customer-actions">

                    <button
                      className="accept-btn"
                      onClick={() =>
                        handleAccept(
                          customer._id,
                          customer
                        )
                      }
                    >

                      <CheckCircle size={18} />

                      Accept

                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        handleReject(
                          customer._id
                        )
                      }
                    >

                      <XCircle size={18} />

                      Reject

                    </button>

                    <button className="call-btn">

                      <BsTelephone />

                    </button>

                  </div>

                </div>

              </div>

            )
          )

        }

      </div>

    </>

  );

};

export default CustomerRequestCard;