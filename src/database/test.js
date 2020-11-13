const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db=>{
   
    //inserir dados na tabela
await saveOrphanage(db,{
    id:2,
        lat:"-27.56246050108078",
        lng:"-48.62352275835293",
        name:"Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco/ ou vulnerabilidade social.",
        whatsapp: "99888855",
          images:[
              "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
              "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
          ].toString() ,
         instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
         opening_hours:"Horário de visitas das 18h até 8h",
         open_on_weekends:"0"
})
    //consultar dados na tabela
 const selectedOrphanages=await db.all("SELECT * FROM orphanages")
 console.log(selectedOrphanages)

 //consultar somente um orfanato pelo id
 //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
 //console.log(orphanage)

 //deletar dado na tabela 
 //console.log(await db.run("DELETE FROM orphanages WHERE id ='3'"))
//console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
 //console.log(await db.run("DELETE FROM orphanages"))
})