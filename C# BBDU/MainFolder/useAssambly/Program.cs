using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace useAssambly
{
    class Program
    {
        static void Main(string[] args)
        {
            assamblyPrograme.Utility utility = new assamblyPrograme.Utility();
            Console.WriteLine(utility.Add(5, 3));
            Console.WriteLine(utility.Sub(5, 3));
            Console.ReadKey();
        }
    }
}
