using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assamblyTest
{
    internal class tt
    {
        public static void Main(string[] args)
        {
            Utility utility = new Utility();
            Console.WriteLine(Utility.Sum(10, 20));
            Console.WriteLine(Utility.Sub(10, 20));
        }
    }
}
