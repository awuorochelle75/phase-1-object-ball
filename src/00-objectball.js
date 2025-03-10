function gameObject(){
     return {
        home:{
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:{
                'Alan Anderson':{
                    Number:0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:1
                },
                'Reggie Evans':{
                    Number:30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    SlamDunks:7

                },
                'Brook Lopez':{
                    Number:11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:15
                },
                'Mason Plumlee':{
                    Number:1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunks:5
            },
            'Jason Terry':{
                    Number:31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunks:1
            },


        },
    },
    away:{
        teamName:'Charlotte Hornets',
        colors:['Turquoise','Purple'],
        players:{
            'Jeff Adrien':{
                Number:4,
                Shoe:18,
                Points:10,
                Rebounds:1,
                Assists:1,
                Steals:2,
                Blocks:7,
                SlamDunks:2

            },
            'Bismak Biyombo':{
                Number:0,
                Shoe:16,
                Points:12,
                Rebounds:4,
                Assists:7,
                Steals:7,
                Blocks:15,
                SlamDunks:10

            },
            'DeSagna Diop':{
                Number:2,
                Shoe:14,
                Points:24,
                Rebounds:12,
                Assists:12,
                Steals:4,
                Blocks:5,
                SlamDunks:5

            },
            'Ben Gordon':{
                Number:8,
                Shoe:15,
                Points:33,
                Rebounds:3,
                Assists:2,
                Steals:1,
                Blocks:1,
                SlamDunks:0

            },
            'Brendan Haywood':{
                Number:33,
                Shoe:15,
                Points:6,
                Rebounds:12,
                Assists:12,
                Steals:22,
                Blocks:5,
                SlamDunks:12

            },
            
        }
    }
    
     }}
    console.log(gameObject());

    function numPointsScored(playersName){
      let game = gameObject();

      if(game.home.players[playersName]){
        return game.home.players[playersName].Points
      }else if(game.away.players[playersName]){
        return game.away.players[playersName]
      }else{
        return "Players Name not found"
      }

    }numPointsScored('Mason Plumlee')

    function shoeSize(playersName){
      let game = gameObject()

      if(game.home.players[playersName])
      {
        return game.home.players[playersName].Shoe
      }else if(game.away.players[playersName]){
        return game.away.players[playersName].Shoe
      }else  {
        return "Player not found "
      }
    }
    function teamColors(teamName) {
      const game = gameObject();

      if(teamName === game.home.teamName){
        return game.home.colors
      } else if (teamName === game.away.teamName){
        return game.away.colors
      }
      else {
        return 'Team Name not found'
      }
    }

    function teamNames(){
      let game = gameObject()
      return [game.home.teamName,game.away.teamName]
   
    }

    function playerNumbers(teamName){
      let game = gameObject()
      let numbers = []
      if(teamName === game.home.teamName){
        for (let gamer in game.home.players){
          numbers.push(game.home.players[gamer].Number)
        }
  
      }else if (teamName === game.away.teamName){
        for (let gamer in game.away.players){
          numbers.push(game.away.players[gamer].Number)
        }
      }else {
        return "No jersey Numbers found"
      }
      return numbers;
    }


    function playerStats(playersName){
      let game=gameObject()

      if(game.home.players[playersName]){
        let gamer= game.home.players[playersName]
        return{
        Number:gamer.Number,
        Shoe:gamer.Shoe,
        Points:gamer.Points,
        Rebounds:gamer.Rebounds,
        Assists:gamer.Assists,
        Steals:gamer.Steals,
        Blocks:gamer.Blocks,
        SlamDunks:gamer.SlamDunks,
      }}else if (game.away.players[playersName]){
        return{
          Number:gamer.Number,
          Shoe:gamer.Shoe,
          Points:gamer.Points,
          Rebounds:gamer.Rebounds,
          Assists:gamer.Assists,
          Steals:gamer.Steals,
          Blocks:gamer.Blocks,
          SlamDunks:gamer.SlamDunks,
       
      }}else {
        return "Player Stats not found"
      }
      }


      function bigShoeRebounds(){
        debugger
        let game = gameObject();
        let largestShoeSize= 0;
        let playerWithLargestShoe= null;

        debugger
        for (let team in game){
          for (let playersName in game[team].players){
            let players = game[team].players[playersName];
            if (players.Shoe > largestShoeSize){
              largestShoeSize=players.Shoe;
              playerWithLargestShoe =players;
          
            }
          }
        }
        debugger
        if(playerWithLargestShoe){
          return playerWithLargestShoe.Rebounds
  
        }else {
          return null;
        }

      }bigShoeRebounds()

      function mostPointsScored(){
        let game = gameObject()
        let mostPoints= -1
        let playerWithMostPoints = null;

        for (let team in game){
          for (let playersName in game[team].players){
            let players = game[team].players[playersName];
            if (players.Points > mostPoints){
              mostPoints=players.Points;
              playerWithMostPoints = playersName;
            }
          }
        }
        return playerWithMostPoints;
      }

      function winningTeam(){
        let game = gameObject()
        let hPoints=0;
        let aPoints=0;
        
        for (let playersName in game.home.players){
          hPoints = hPoints + game.home.players[playersName].Points
        }
         for (let playersName in game.away.players){
          aPoints = aPoints + game.away.players[playersName].Points
         }

         if (hPoints > aPoints){
          return game.home.teamName;
         }else if (aPoints > hPoints){
          return game.away.teamName;
         } else {
          return 'It is a tie!!'
         }
      }

      function playerWithLongestName(){
        let game = gameObject()
        let longestlength = 0;
        let playerWithLongestName= ""
      

        if(game.home && game.home.players){
        for ( let playersName in game.home.players){
          if(playersName.length > longestlength){
            longestlength = playersName.length;
            playerWithLongestName = playersName;
          }
        }
      }

      if (game.away && game.away.players){
        for ( let playersName in game.away.players){
          if(playersName.length > longestlength){
            longestlength = playersName.length;
            playerWithLongestName = playersName;
          }
        }
      }
      if(playerWithLongestName === ""){
        return null;
     }else {
        return playerWithLongestName;
      }

   
      }
      function doesLongNameStealATon(){
        let game = gameObject()
        let longName=playerWithLongestName()
  
        let mostSteals= -1;
        let playerWithMostSteals = null;
         
        for (let team in game){
          for(let playersName in game[team].players){
            let players = game[team].players[playersName];
            if (players.Steals > mostSteals){
              mostSteals = players.Steals;
              playerWithMostSteals= players;
            }
          }
        }
      
  
  if (longName && playerWithMostSteals){
    if(game.home && game.home.players && game.home.players[longName] === playerWithMostSteals){
      return true; 
  }else if (game.away && game.away.players && game.away.players[longName] === playerWithMostSteals){
    return true;
  }
  else {
    return false;

  }
  }else {
    return false;
  }}






    
     