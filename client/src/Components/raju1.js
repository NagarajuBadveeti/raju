import React from "react";
import Image2 from '../Components/image/18-250x250.webp';
import './raju1.css';

function Ambulance() {
  return (
    <div>
      <center><h1>Ambulance Details</h1></center>
      <h1>Emergency</h1>
      <p>
        An ambulance is a medically-equipped vehicle used to transport patients to treatment facilities, such as hospitals. Typically, out-of-hospital medical care is provided to the patient during the transport. Ambulances are used to respond to medical emergencies by emergency medical services (EMS), and can rapidly transport paramedics and other first responders, carry equipment for administering emergency care, and transport patients to hospital or other definitive care. Most ambulances use a design based on vans or pickup trucks, though others take the form of motorcycles, buses, limousines, aircraft, and boats.
      </p>
      <p>
        Ambulances are generally considered emergency vehicles authorized to be equipped with emergency lights and sirens. Generally, vehicles count as an ambulance if they can transport patients. However, it varies by jurisdiction as to whether a non-emergency patient transport vehicle (also called an ambulette) is counted as an ambulance. These vehicles are not usually (although there are exceptions) equipped with life-support equipment, and are usually crewed by staff with fewer qualifications than the crew of emergency ambulances. Conversely, EMS agencies may also have non-transporting EMS vehicles that cannot transport patients.
      </p>
      <p>
        The term ambulance comes from the Latin word "ambulare" meaning "to walk or move about," which is a reference to early medical care where patients were moved by lifting or wheeling. The word originally meant a moving hospital, which follows an army in its movements. Ambulances were first used for emergency transport in 1487 by the Spanish forces during the siege of Málaga by the Catholic Monarchs against the Emirate of Granada. During the American Civil War, vehicles for conveying the wounded off the field of battle were called ambulance wagons. Field hospitals were still called ambulances during the Franco-Prussian War of 1870 and in the Serbo-Turkish war of 1876 even though the wagons were first referred to as ambulances around 1854 during the Crimean War.
      </p>
      <center>
        <img src={Image2} alt="Ambulance" />
      </center>
    </div>
  );
}

export default Ambulance;
