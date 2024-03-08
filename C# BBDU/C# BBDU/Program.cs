using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__BBDU
{
    //class Bank
    //{
    //    public int principal;
    //    public float rate;
    //    public int time;
    //    public Bank()
    //    {
    //        principal = 0;
    //        rate = 0.0F;
    //        time = 0;
    //    }
    //    public Bank(int p, float r, int t)
    //    {
    //        principal = p;
    //        rate = r;
    //        time = t;
    //    }
    //    public float CalculateInterest()
    //    {
    //        return (principal * rate * time) / 100;
    //    }
    //    public float CalculateInterest(int p, float r, int t)
    //    {
    //        return (p * r * t) / 100;
    //    }
    //    public static void Main(string[] args)
    //    {
    //        Bank b = new Bank(1000, 7, 2);
    //        Console.WriteLine("Principal: " + b.principal);
    //        Console.WriteLine("Rate of Interest: " + b.rate);
    //        Console.WriteLine("Time: " + b.time);
    //        Console.WriteLine("Simple Interest: " + b.CalculateInterest());
    //        Console.WriteLine("Simple Interest: " + b.CalculateInterest(2000, 8, 3));
    //        Console.ReadLine();
    //    }
    //}

    class Bank
    {
        public int principal;
        public float rate;
        public int time;

        public void SetData(int p, float r, int t)
        {
            principal = p;
            rate = r;
            time = t;
        }
        public void GetData()
        {
            Console.WriteLine("Principal: " + principal);
            Console.WriteLine("Rate of Interest: " + rate);
            Console.WriteLine("Time: " + time);
        }
        public float CalculateInterest()
        {
            return (principal * rate * time) / 100;
        }
        public static void Main(string[] args)
        {
            Bank b = new Bank();
            b.SetData(1000, 7, 2);
            b.GetData();
            Console.WriteLine("Simple Interest: " + b.CalculateInterest());
            Console.ReadLine();
        }
    }
}
