const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn){
    return (
      <StyledDisplay>
        {allServos.map((x) => {
            return (
              <div key={x.token_id}>
                <h2>{x.name}</h2>
                <img src={x.image} alt="servos" />
                <p>{x.description}</p>
                <div className='price-container'><p> 0.02Ξ </p></div>
                <BuyButton nft_Id={x.token_id} buyNft={props.buyNft}/>
              </div>
            );
          })}
      </StyledDisplay>
    );
};




































