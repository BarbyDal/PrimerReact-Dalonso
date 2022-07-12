
import { initializeApp } from "firebase/app";
import { getFirestore, where, query, getDocs, getDoc, doc, addDoc, Timestamp, collection } from  "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA--3PO-47vHO0YHD9QDI8dz0gPVEXH1qU",
  authDomain: "alonsiecommercereact.firebaseapp.com",
  projectId: "alonsiecommercereact",
  storageBucket: "alonsiecommercereact.appspot.com",
  messagingSenderId: "891417862581",
  appId: "1:891417862581:web:d607d2564a66a57796f9fc"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore= getFirestore(appFirebase);

export function testDatabse(){
    console.log(appFirestore)
}

export async function traerProductos(categoryId){
    const itemsCollection= collection(appFirestore, "productos");
    
    let productosSnapshot = []

    if(categoryId){
        const queryFilter = query(  itemsCollection,
                            where("category", "==", categoryId ));
    
         productosSnapshot= await getDocs(queryFilter);

    }else{
         productosSnapshot= await getDocs(itemsCollection);

    }
    let respuesta= productosSnapshot.docs.map(doc=> {
      return{
        ...doc.data(),
        id: doc.id
      }
    });
    return respuesta;
}

export async function traerUnProducto(itemId){

  const docref= doc(appFirestore, "productos", itemId);

  const docSnapshot= await getDoc(docref);

  return  {id: docSnapshot.id, ...docSnapshot.data()};
}


export async function createBuyOrder(dataOrder)
{
  const orderCollectionRef= collection(appFirestore, "orders");
  const dateTimestamp= Timestamp.now();

  const dataOrderWithDate= {
    buyer: dataOrder.buyer,
    items: dataOrder.items,
    total: dataOrder.total,
    date: dateTimestamp
  }

  const orderCreated= await addDoc(orderCollectionRef, dataOrderWithDate);
  //console.log("added:", orderCreated.id);
  return orderCreated;
}
export default appFirestore;