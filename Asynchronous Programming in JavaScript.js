//TASK 1
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1 second between logs
  }
}

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

//TASK2
async function awaitCall() {
    try {
      // Simulate fetching data from an API
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: 'Fetched data from API' }); // Simulating a successful response
        }, 2000); // Simulate a delay
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during API call:', error);
    }
  }
  
  awaitCall();

  //TASK3
  async function awaitCall() {
    try {
      // Simulate fetching data from an API
      const response = await new Promise((resolve, reject) => {
        // Simulate failure scenario with reject
        const success = false;
        if (success) {
          setTimeout(() => resolve({ data: 'Fetched data from API' }), 2000);
        } else {
          setTimeout(() => reject('Failed to fetch data'), 2000); // Simulate an error
        }
      });
      console.log(response.data);
    } catch (error) {
      // Handle errors gracefully
      console.error('Error during API call:', error);
    }
  }
  
  awaitCall();
//TASK4
async function concurrentRequests() {
    try {
      const request1 = new Promise(resolve => setTimeout(() => resolve('Data from API 1'), 1000));
      const request2 = new Promise(resolve => setTimeout(() => resolve('Data from API 2'), 1500));
  
      // Waiting for both requests to resolve concurrently
      const results = await Promise.all([request1, request2]);
  
      console.log('Combined results:', results);
    } catch (error) {
      console.error('Error with concurrent requests:', error);
    }
  }
  
  concurrentRequests();
//TASK5
async function parallelCalls(urls) {
    try {
      // Simulate fetching data from multiple URLs concurrently
      const fetchData = url => {
        return new Promise(resolve => {
          setTimeout(() => resolve(`Fetched data from ${url}`), Math.random() * 2000);
        });
      };
  
      // Wait for all fetches to complete in parallel
      const results = await Promise.all(urls.map(url => fetchData(url)));
  
      console.log('Responses from all URLs:', results);
    } catch (error) {
      console.error('Error during parallel calls:', error);
    }
  }
  
  const urls = ['https://api1.com', 'https://api2.com', 'https://api3.com'];
  parallelCalls(urls);
  