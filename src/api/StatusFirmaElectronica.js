export const statusFirmaSupabase = async ({ lead }) => {
    let url = "/back/status-firma-electronica";
  
    const body = {
      lead: lead
    };
  
    const obj = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    return obj.json() || {};
  };
  