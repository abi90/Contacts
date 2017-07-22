import React, {Component} from 'react'
/*Function Implementation (Stateless Functional Component)*/
function ListContacts(props){
  return (
    <ol className='contact-list'>
     {
       props.contacts
       .map(
         (contact)=>(
           <li key={contact.id} className="contact-list-item">
             <div className="contact-avatar"
               style={{
                 backgroundImage: `url(${contact.avatarURL})`
               }}/>
             <div className='contact-details'>
               <p>{contact.name}</p>
               <p>{contact.email}</p>
             </div>
             <butoon className='contact-remove'>
               Remove
             </butoon>
           </li>
         )
       )
     }
    </ol>
  )
}

/*Class Implementation
class  ListContacts extends Component {
  render() {
     return (
       <ol className='contact-list'>
        {
          this.props.contacts
          .map(
            (contact)=>(
              <li key={contact.id} className="contact-list-item">
                <div className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}/>
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>
                <butoon className='contact-remove'>
                  Remove
                </butoon>
              </li>
            )
          )
        }
       </ol>
   )
  }

}*/

export default ListContacts
