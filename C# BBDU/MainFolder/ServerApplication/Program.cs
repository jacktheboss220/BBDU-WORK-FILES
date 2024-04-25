using System;
using System.Net;
using System.Net.Sockets;
using System.Text;


namespace ServerApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            // Establish the local endpoint for the socket.
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress ipAddr = ipHost.AddressList[0];
            IPEndPoint localEndPoint = new IPEndPoint(ipAddr, 11111);

            // Creation TCP/IP Socket using Socket Class Constructor
            Socket listener = new Socket(ipAddr.AddressFamily, SocketType.Stream, ProtocolType.Tcp);

            try
            {
                // Using Bind() method to bind the socket with local endpoint
                listener.Bind(localEndPoint);

                // Using Listen() method to listen the client connection request
                listener.Listen(10);

                Console.WriteLine("Waiting for a connection...");

                // Suspend while waiting for incoming connection
                Socket clientSocket = listener.Accept();

                // Data buffer
                byte[] bytes = new Byte[1024];
                string data = null;

                while (true)
                {
                    int numByte = clientSocket.Receive(bytes);
                    data += Encoding.ASCII.GetString(bytes, 0, numByte);
                    if (data.IndexOf("<EOF>") > -1)
                        break;
                }

                Console.WriteLine("Text received -> {0} ", data);

                byte[] message = Encoding.ASCII.GetBytes("Server Side");

                // Send a message to Client
                clientSocket.Send(message);

                // Close client Socket using the Close() method. After closing, we can use the closed Socket for a new Client Connection
                clientSocket.Shutdown(SocketShutdown.Both);
                clientSocket.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}