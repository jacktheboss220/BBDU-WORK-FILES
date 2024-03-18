using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        String empName;
        int empID;
        String empAddress;
        public Program(String name, int id, String address)
        {
            empName = name;
            empID = id;
            empAddress = address;
        }
        public void show()
        {
            Console.WriteLine("Employee Name: " + empName);
            Console.WriteLine("Employee ID: " + empID);
            Console.WriteLine("Employee Address: " + empAddress);
        }
        static void Main(string[] args)
        {
            Program p = new Program("John", 123, "New York");
            p.show();
            Console.ReadKey();
        }
        
    }
}
