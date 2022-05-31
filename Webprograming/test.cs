using System.Net;
using System.IO;
using System.Xml;
namespace ExamBusLocation
{
    public partial class Form1 : Form
    {
    	const string targetURL = "http://openapi.gbis.go.kr/ws/rest/buslocationservice";
        const string serviceKey = ""; //마이 페이지에서 자신의 인증키 입력.
        const string routeid = "233000031"; //버스 노선 ID
    public static string getResults()
    {
    	string result = string.Empty;
		try
		{
        	WebClient client = new WebClient();
			string url = string.Format(@"{0}?serviceKey={1}&routeId={2}", targetURL, serviceKey, routeid);
			using (Stream data = client.OpenRead(url))
			{
            	using (StreamReader reader = new StreamReader(data))
            	{
					string s = reader.ReadToEnd();
					result = s;
					reader.Close();
					data.Close();
				}
			}
		}
		catch (Exception exc)
		{
			MessageBox.Show(exc.Message);
		}
		return result;
		}
	}   
}