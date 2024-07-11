import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./CardListStyles.module.css";
import Card from "./Card";

const CardList = ({ items }) => {

  const [ paintings, setPaintings ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/store/v1/paintings/';

    axios.get (apiUrl)
      .then((response) => {
        setPaintings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
        setError(error);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Loading Failed!!!</p>
  }

  return (
    <div className={styles.container}>
      {paintings.map((painting, index) => (
        <Card key={index} picture={painting.image} name={painting.name} />
      ))}
    </div>
  );
}

export default CardList;