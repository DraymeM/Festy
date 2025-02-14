import React, { useState, useEffect } from 'react';
import './Ticket.css';
import Modal from './Modal.jsx';


const Ticket = ({ ticketType, available_quantity, price, onPurchase }) => {
    const [selectedDays, setSelectedDays] = useState(ticketType === "2 Day" ? ["", ""] : [""]);
    const [currentQuantity, setCurrentQuantity] = useState(available_quantity);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    const handleBuyClick = () => {
        
        if (currentQuantity <= 0) {
            setModalTitle("Error");
            setModalMessage("This ticket type is sold out.");
            setIsModalOpen(true);
            return;
        }
    
        if (ticketType === "1 Day") {
            if (selectedDays[0] === "") {
                setModalTitle("Error");
                setModalMessage("Please select a day.");
                setIsModalOpen(true);
                return;
            }
            setModalTitle("Success");
            setModalMessage(`Buying ${ticketType} Ticket for ${selectedDays[0]}`);
            setCurrentQuantity(currentQuantity-1);
            onPurchase({ ticketType, selectedDays: selectedDays.slice(0, 1) }); // Notify container about the purchase
        } else if (ticketType === "2 Day") {
            if (selectedDays[0] === "" || selectedDays[1] === "") {
                setModalTitle("Error");
                setModalMessage("Please select two days.");
                setIsModalOpen(true);
                return;
            }
            if (selectedDays[0] === selectedDays[1]) {
                setModalTitle("Error");
                setModalMessage("Please select two different days.");
                setIsModalOpen(true);
                return;
            }
            setModalTitle("Success");
            setModalMessage(`Buying ${ticketType} Ticket for ${selectedDays[0]} and ${selectedDays[1]}`);
            setCurrentQuantity(currentQuantity-1);
            onPurchase({ ticketType, selectedDays }); // Notify container about the purchase
        } else if (ticketType === "3 Day") {
            // Handle "All 3 Days" ticket purchase
            setModalTitle("Success");
            setModalMessage(`Buying All 3 Days Ticket`);
            setCurrentQuantity(currentQuantity-1);
            onPurchase({ ticketType }); // Notify container about the purchase
        }
    };

    const handleDaySelection = (day, index) => {
        const updatedDays = [...selectedDays];
        updatedDays[index] = day;
        if (index === 1 && updatedDays[0] === day) {
            setModalTitle("Error");
            setModalMessage("You cannot select the same day for both options.");
            setIsModalOpen(true);
            return;
        }
        setSelectedDays(updatedDays);
    };

    return (
        <div className={`ticket ${currentQuantity <= 0 ? 'sold-out' : ''}`}>
            <h3 className ='TicketTitle'>{ticketType} Ticket</h3>
            <p>Price: {price}$</p>
            <p>Available: {currentQuantity > 0 ? currentQuantity : "Sold Out"}</p>
            {currentQuantity > 0 ? (
                <>
                    {ticketType === "1 Day" && (
                        <select onChange={(e) => handleDaySelection(e.target.value, 0)}>
                            <option value="">Select a day</option>
                            <option value="1st day">1st Day</option>
                            <option value="2nd day">2nd Day</option>
                            <option value="3rd day">3rd Day</option>
                        </select>
                    )}
                    {ticketType === "2 Day" && (
                        <div className="dropdown2-container">
                            <select onChange={(e) => handleDaySelection(e.target.value, 0)}>
                                <option value="">Select Day 1</option>
                                <option value="1st day">1st Day</option>
                                <option value="2nd day">2nd Day</option>
                                <option value="3rd day">3rd Day</option>
                            </select>
                            <select onChange={(e) => handleDaySelection(e.target.value, 1)}>
                                <option value="">Select Day 2</option>
                                <option value="1st day">1st Day</option>
                                <option value="2nd day">2nd Day</option>
                                <option value="3rd day">3rd Day</option>
                            </select>
                        </div>
                    )}
                    <button onClick={handleBuyClick} className="buttonBuy">Buy</button>
                </>
            ) : null}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
                message={modalMessage}
            />
        </div>
    );
};

export default Ticket;
