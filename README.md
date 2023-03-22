# Stock quotes

A server exposing GraphQL API that collects and stores stock quotes in a relational, normalised database.
For this purpose the system provides an open GraphQL API. The API allows receiving stock quotes from other services. 

The client is able to send an instrument ticker, the timestamp, and the price of the specific instrument in the specific transaction in a single request. A new instrument ticker is created before adding a quote for it for the first time. 
