using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace xmlPro
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
        List<student> li = new List<student>();
        protected void Page_Load(object sender, EventArgs e)
        {
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(Server.MapPath("~/student.xml"));
            XmlNodeList nodeList =
            xmlDoc.DocumentElement.SelectNodes("/Students/student");
            foreach (XmlNode node in nodeList)
            {
                student s = new student();
                s.id =
                Convert.ToInt32(node.SelectSingleNode("id").InnerText);
                s.name = node.SelectSingleNode("name").InnerText;

                s.age =
                Convert.ToInt32(node.SelectSingleNode("age").InnerText);
                li.Add(s);
            }
            GridView1.DataSource = li;
            GridView1.DataBind();
        }
    }
}
}
