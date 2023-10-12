function transformData(data) {
    return data.map(parking => {
      const totalSlotsSum = parking.total_slots.reduce((acc, value) => acc + value, 0);
      const emptySlotsSum = parking.empty_slots.flat().length;
      const priceAverage = (parking.price.reduce((acc, value) => acc + value, 0) / parking.price.length).toFixed(2);
  
      return {
        name: parking.name,
        id: parking.my_id,
        total_slots: totalSlotsSum,
        empty_slots: emptySlotsSum,
        avg_pricing: priceAverage
      };
    });
}
  


export async function GET(req: Request,res: Response){

    const result = await fetch('https://sihdashboardapi-chaitanyakanhar2004.b4a.run/allparkings');
    const data = await result.json();

    const parkings = transformData(data);

    return new Response(JSON.stringify({parkings:parkings}));
}