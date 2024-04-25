using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace ClientSocket
{
    class Program
    {
        public static void StartClient()
        {
            // Data buffer for incoming data
            byte[] bytes = new byte[1024];

            // Establish the remote endpoint for the socket
            IPHostEntry ipHost = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress ipAddr = ipHost.AddressList[0];
            IPEndPoint remoteEP = new IPEndPoint(ipAddr, 11111);

            // Creation TCP/IP Socket using Socket Class Constructor
            Socket sender = new Socket(ipAddr.AddressFamily, SocketType.Stream, ProtocolType.Tcp);

            try
            {
                // Connect Socket to the remote endpoint using method Connect()
                sender.Connect(remoteEP);

                Console.WriteLine("Socket connected to -> {0} ", sender.RemoteEndPoint.ToString());

                // Encode the data string into a byte array
                byte[] msg = Encoding.ASCII.GetBytes("This Is Client Side<EOF>");

                // Send the data through the socket
                int bytesSent = sender.Send(msg);

                // Receive the response from the remote device
                int bytesRec = sender.Receive(bytes);
                Console.WriteLine("Echoed test = {0}", Encoding.ASCII.GetString(bytes, 0, bytesRec));

                // Release the socket
                sender.Shutdown(SocketShutdown.Both);
                sender.Close();
            }
            catch (ArgumentNullException ane)
            {
                Console.WriteLine("ArgumentNullException : {0}", ane.ToString());
            }
            catch (SocketException se)
            {
                Console.WriteLine("SocketException : {0}", se.ToString());
            }
            catch (Exception e)
            {
                Console.WriteLine("Unexpected exception : {0}", e.ToString());
            }
        }

        static void Main(string[] args)
        {
            StartClient();
        }
    }
}
