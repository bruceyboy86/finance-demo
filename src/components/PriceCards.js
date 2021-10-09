import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const PriceCards = (props) => {

  // calculate the highest/lowest stock price using ternary so element can render without data
  const HighStockPrice = (data) => {
    return <span>{data.d ? Math.round(Math.max.apply(null, data.d)) : <Spinner animation="grow" />}</span>
  }
  const LowStockPrice = (data) => {
    return <span>{data.d ? Math.round(Math.min.apply(null, data.d)) : <Spinner animation="grow" />}</span>
  }

  // get average by reducing the array then divide by number of returned entries
  const AverageStockPrice = (data) => {
    if (data.d !== undefined) {
      const average = data.d.reduce(
        (total, num) => {
          return total ? total + num : null;
        }
      )
      return <span>{Math.round(average / data.d.length)}</span>
    }
    else {
      return <><Spinner animation="grow" /> </>
    }
  }
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Minimum share price</Card.Title>
            <Card.Text>
              <LowStockPrice d={props.low} />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Average share price</Card.Title>
            <Card.Text>
              <AverageStockPrice d={props.close} />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Maximum share price</Card.Title>
            <Card.Text>
              <HighStockPrice d={props.close} />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
{/* 
      <div id='stockRange'>
        <LowStockPrice d={props.low} />
        <AverageStockPrice d={props.close} />
        <HighStockPrice d={props.close} />
      </div> */}

    </>
  )
}

export default PriceCards