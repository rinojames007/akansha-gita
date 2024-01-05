import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className=" pt-[50px] flex flex-col justify-center items-center">
      <div className="heading flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Experience the Best of{" "}
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold text-white">College fest! </h1>
        <p className="pt-5 text-lg text-center font-semibold text-slate-300 ">
          Explore various events, workshops, competitions and much more.
        </p>
      </div>
      <div className=" flex flex-col sm:flex-row justify-around items-center w-full py-[50px]">
        <Link to="/ahwan" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Ahwan" url={"https://lh3.googleusercontent.com/pw/ABLVV85QU7rNpPcD1ROZ5JD9rzPwqGUgQBxFdh_x4r11gNmRb5dc4g0GQD2sEE6YJlfTJXiWdDWd4RQTJz57ovaczImvB_QFu8OqOcs5B7ry2DPfuxex731J4GsETXK8rvuHVOk1OC0lCbxHiyrJJXyN2Vp78yFzOBIk6wzGudBu6qBhJePp8HzF-lEFqLJBcxtUdZ5p5XBEmgJDmCpxl8rq9h1yMNPLdV2mcyYU5a5ERdhYOavFQmuOCpdH37bZMyxq02XMmT40HxN9jzJjjjje37Aw05lrYBbrQM8Ijn7ID3_pIR-mRpBBasKdQVFsvbLvZzRjrcbvba1zPko21Jx832-6qb1j_-AEuG8mWyHZrb70r6Cxf8UkvDPjhYVyY63fybhch4RTptNnhDl1SO5gnM0F3e0_SOWFyhcmqX0pmcn9GmorC-_Wx3kZ6o_Dy47WA3tqAVE7OcBP_ETyjFR1iTYfNvl9TPaFlLcJtIZQaY5eHgm57eznOeTHkDhLXk4PTDB9vpWgXX9HJmy1p2QB1vOt3WBubPP5907rxFsFQ1cUWBKRcawY0VmFXBBXD04oZHg-b0urjqaf3HYwIHgJVpiSmbHH7AUlei53iJvfMLZb0pJTxTIUy3p0iTCCKWaS0G0E6ZnNJeZZeRttbXFWBW5R2aSOQXxA0NGMx-U4zkAYAfFLTtSzOyEyOyRxPD_p9Ck3uatz4stBJANz6HCb5Dr8eJwTLZmusj3FShAJG7zXiNXfsaR4VlBon2ShHRK461kHnhH_VMmqjy0Ha2PO46qTorE8NLUQitiR_bAjZGHS96ga9EVdigSdqxSGQw9efVbHWvy-9QfWjmCe-mboDn7V9csGhDioN8o-vZWoZb-nK6Fgqk7DiIq--tn9aye3yJQHTKoxMHnd964voi2wFkdYIT304qnEIqtAyFXX1Q=w1522-h975-s-no-gm"} />
        </Link>

        <Link to="/anwesh" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Anwesh" url={"https://lh3.googleusercontent.com/pw/ABLVV875adLVYeamRsPenL3tHoqu95leEdt4g-WFgbWS0xSOIhvmX6ItqiELDZfax65YgCuvb6jMZhRoWw0qs-jIXF6t9eX9f2ybOnyCmdjjFanE_ri7V2f9S_a0CsBgU2dBBT7pYfoGYAJ7ig59n7wt91DqW-fqsCHgcQY84l5EGix75I-w8KjRx28SntyWEM8Zb3CGbyXD8-4ItAsWD7E2huZmS0VpmhH0bP9hu83hfdz6jNdy78B5IB1FLjWuRlrzbWcFhIAqnqy8CnvUrh3pakaRK_RSfk5d5mJj_vD1YsXivqCLcijzEsquIscalhfM0jX9FCrxTWrWi2JgIEn7j760D2kVSaMYduKqSzoPq1YvJkNzEJ-J-2phDqaMD1bxAUAomOLKnLgmD2VMrPyTAOelCIXmQXf1CgLFgyFsym35OJJUGlhZ_Uuj_TOnbzK8jdhNL-5xraPmoJy8hbIp5Vks80_He2IWdhKYlZyujBkLp2vx48vSnUBQXLDkOBHXOto6cb6XnLsX0awqtPP637QDtdQpf_MAxaui6LIncfQPg-tGLE7xJZr42E8TOb7nNSXQlwQ0QEhCru111hyhoJLHAg-QwElxm-ezx-phGme4vZ3mHocwS0BzAJuE-hPKfk8pmb21zJbwjXqSF7euDFijmfFRm1TtGS0v_W3_qWM1w04lBuvc6K_39eD74i_0j0ikb9uYp6p4LMEugBoTnKn_jdwQzAZz68SiTyZv2Hz7QnKNuBj-7tLUMjoZV5IhUD6518Cw6g5v97Z9HA7Tx_UeMGMiTXlMWzgoh4lFftLPrEbEC-lMpz-eYcq3SviuIzkGFPsCRywonB-601tVO4HVsFgODKvvF9H6S3VLMIf6lxbCF1FSuL0Y1aAtkybEEUmyrKBCahM4YhsPchqhhNxObBbVrQCeAUygvhBMJA=w521-h293-no"} />
        </Link>

        <Link to="/akanksha" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Akanksha" url={"https://lh3.googleusercontent.com/pw/ABLVV86ZqPt9MCVCEt760lraniPLqfYMGsBfS5mqMXD3o3YqFsDmcxztW1VSfxrtWs8X4aay52-IB41pWC0rN1-dWgjAD7U5RNSA8oNQ9U_wrRnJCRnGMUL9N2QtpyeTu857FYBQXNwUb8WJI4xRuD4a-FUtjB58kmT8_njuWLA1Qx3B_xiYIkH0qZXaahU4L14YNwkYqntcd_jlTVzsWJm-UT0DQGNhXiOi73QOliF9jLEtjajoWxB6gmZ2LnYZbFf55OzUExAlwnrf79clZUJuXmWtlmm5doyqE6OAYVU4a_pPiQaQHZcZnDLvWIB32goQMlYfabH0O3BTodSHot-hLIq6qfZrOWGnE_T7DmqwJz43ykTPV0sHJ__-wEU2PiNsub8-OWWbioNnos7pws3P5YKDcneI_zTj2nKH3D51fpetG0GPrT1ag8yCpYeCKZ-mMZIDgrqbqDAAmoFu0adGDjBa2AVW5N6qwqM3tl2t2bdaXBJ1diUG29Z27SQ-usI9Ijtmk9Y02aumwa0HlZ7Dx8Vx4TikNDAY77H0LSHF3BCUzW48_WhswinxmpBx27t1nP6SzHofwbNSAglkGIHuB2ufPb5DoSlixTGrHce9DN3iW7FSWyepNPi9qX_J9bNSsVfWP3mOPlpq_5QMzotL0JLhgR9wRXJbKH1ohFfrlJVjuAGO3nRa5A6-tz-8AsnFqpQUdvqNxugHNiee_B3eZHucVlSTPfBeaRIVyN_lpu3BNf7vBy9VS0vNybwPL5BKdM1x5pnQfrkXB6G9cF7NN8Chl0dZiEPWEqhlzXGyj3E0sh1M3pt9LAf6LGomokN45oL4eZyLgEtNpN5-v3YP9JCyNAlIQpIJ0ML8Bopwzp4lXKaMI3JFdNRZnmg3-xCzU9xU_25UTou0PYXj2rTfAqmjSnIkUFE4sug8Ldv_Uw=w1461-h975-s-no"} />
        </Link>
      </div>
    </div>
  );
};

export default Events;
