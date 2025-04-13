require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const getKey = async (key) => {
  try {
    const { data, error } = await supabase
      .from('keys')
      .select('apikey')
    if (error) {
      return null
    }

    const result = data.find(item => item.apikey === key)

    if (!result) return null

    return true
  } catch (error) {
    console.log('Key.getKey.error', error)
    throw new Error('Database error')
  }
}

module.exports = {
  getKey
}
