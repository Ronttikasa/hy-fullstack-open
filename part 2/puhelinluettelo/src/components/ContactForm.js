const ContactForm = ({name, number, namehandler, nbhandler, phonebookhandler}) => {
    return (
      <form onSubmit={phonebookhandler}>
        <div>
          name:&nbsp;
          <input 
            value={name} 
            onChange={namehandler} />
          <br />
          number:&nbsp;
          <input 
            value={number} 
            onChange={nbhandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

export default ContactForm