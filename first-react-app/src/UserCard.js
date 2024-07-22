import Card from 'react-bootstrap/Card';
function UserCard({user}){
    return(<>
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
        <Card.Text>
            <h5>Address</h5>
          {user.address.street}<br></br>
          {user.address.city}
        </Card.Text>
        <Card.Link href="#">{user.email}</Card.Link>
        <Card.Link href="#">{user.website}</Card.Link>
      </Card.Body>
    </Card>

    </>)
}

export default UserCard