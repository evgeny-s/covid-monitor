import React, {useState} from 'react';

function DataForm({onSubmit}) {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [amount, setAmount] = useState('');

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function submit(e) {
    e.preventDefault();

    onSubmit({
      date,
      city,
      amount,
    });

    setDate('');
    setCity('');
    setAmount('');
  }

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Date</label>
        <input
          onChange={handleDate}
          type="text"
          value={date}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Date"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">City</label>
        <input
          onChange={handleCity}
          type="text"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="City"
          value={city}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword3">Infected Amount</label>
        <input
          onChange={handleAmount}
          type="number"
          className="form-control"
          id="exampleInputPassword3"
          placeholder="Infected Amount"
          required
          value={amount}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </form>
  );
}

export default DataForm;
