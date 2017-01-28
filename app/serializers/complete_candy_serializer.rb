class CompleteCandySerializer < ActiveModel::Serializer
  root :candy
  attributes :name, :url, :points, :id

  def url
    object.image_url
  end
end
